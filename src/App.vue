<template>

<p>Id Liste des tâches: {{ id }}</p>
<button @click="id++">Récupérer les prochaines tâches</button>

<p v-if="data">{{ data }}</p>
<p v-else>Chargement en cours...</p>

<button @click="unwatch">Stop</button>

<br>

<p>
  Posez une question:
  <input v-model="question" :disabled="chargement"/>
</p>
<p>{{ reponse }}</p>

</template>

<script setup>
import { ref, watch, watchEffect, onBeforeMount, onUpdated, onBeforeUpdate } from 'vue';

const id = ref(1);
const data = ref();
const recuperer = async () => {
  data.value = null;
  const resultat = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`);
  data.value = await resultat.json();
};

//watch(id, recuperer);
const unwatch = watchEffect(recuperer);

//exemples d'observateurs
const question = ref('');
const chargement = ref(false);
const reponse = ref('');

watch(question, async (newQuestion, oldQuestion) => {
  console.log('nouveau:', newQuestion, '| ancien:', oldQuestion);

  if(newQuestion.includes('?')) {
    chargement.value = true;
    reponse.value = 'Je réfléchi...';

    try {
      const resultat = await fetch('https://yesno.wtf/api');
      
      switch((await resultat.json()).answer) {
        case 'yes':
          reponse.value = 'Oui.';
          break;
        case 'no':
        reponse.value = 'Non.';
          break;
        default: 
          break;
      }
    } catch(error) {
      reponse.value = 'Je n\'arrive pas à réfléchir. ' + error;
    } finally {
      chargement.value = false;
    }
  }
}, { flush: 'post' });
//en 3e parametre du watch:
//{ immediate: true/false } lance l'observateur en "lazy" ou "eager"
//{ once: true } n'execute qu'une fois
//{ flush: 'post'/'sync' } post entre les deux hooks update / sync lance l'observateur en synchrone de l'update

onBeforeUpdate(() => console.log('before updated'));
onUpdated(() => console.log('updated'));

onBeforeMount(() => recuperer());
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
