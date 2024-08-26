<template>

<form @submit.prevent="add">
  <input v-model="texteTache" required placeholder="Nouvelle tâche"/>
  <button>Ajouter une tâche</button>
</form>
<ul>
  <li v-for="(todo, index) in cacherListe" :key="todo.id">
    index: {{ index }} | 
    <input type="checkbox" v-model="todo.complete" /> |
    <span :class="{ complete: todo.complete }">{{ todo.texte }}</span> | 
    <button @click="remove(todo)">X</button>
  </li>
</ul>

<button @click="cacherTache = !cacherTache">{{ cacherTache ? 'Tout afficher' : 'Cacher complété' }}</button>

</template>

<script setup>
import { ref, computed } from 'vue';

var id = 0;
const todoListe = ref([
  { id: id++, texte: 'Faire le lit', complete: true },
  { id: id++, texte: 'Faire le petit déjeuner', complete: false },
  { id: id++, texte: 'Aller au travail', complete: false }
]);

//ajout / retirer tache
const texteTache = ref('');
const add = () => {
  todoListe.value.push({ id: id++, texte: texteTache.value, complete: false });
  texteTache.value = '';
}
const remove = todo => {
  todoListe.value = todoListe.value.filter(t => t !== todo);
}

//afficher / masker tache complété
const cacherTache = ref(false);
const cacherListe = computed(() => {
  console.log('compute');
  return cacherTache.value ? 
    todoListe.value.filter(t => !t.complete) : todoListe.value;
});

</script>

<style scoped>
.complete {
  text-decoration: line-through;
}

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
