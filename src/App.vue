<template>

<button @click="affichage = !affichage">Changer l'affichage</button>

<!--Ajoute et retire les éléments du DOM, lourd en chargement et changement-->
<h1 id="Moi" v-if="affichage">Je suis présent dans le DOM</h1>
<h1 v-else>Je ne suis plus présent dans le DOM</h1>

<!--Cache et affiche les éléments dans le DOM, Attention! Encore présents dans l'inspecteur avec display: none-->
<h1 id="Moi" v-show="affichage">Je suis affiché dans le DOM</h1>
<h1 v-show="!affichage">Je suis toujours affiché dans le DOM, mais je suis caché</h1>

<div v-if="test">
  {{ test.compte }}
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const affichage = ref(true);

//vu en détail dans Cycle de Vie
const test = ref();
onMounted(() => setTimeout(() => { test.value = { compte: true } }, 2000));

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
