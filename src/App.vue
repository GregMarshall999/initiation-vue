<template>
  <h1>Titre de la page</h1>

  <Affichage :titre="passerAEnfant01.titre" :textes="passerAEnfant01.textes" />

  <Affichage :titre="passerAEnfant02.titre" :textes="passerAEnfant02.textes" />
</template>

<script setup>
import Affichage from './components/Affichage.vue';
import { ref } from 'vue';

const passerAEnfant01 = ref({
  titre: 'Titre principal',
  textes: [
    'Je suis la première ligne.', 
    'Je suis la seconde ligne.'
  ]
});

const passerAEnfant02 = ref({
  titre: 'Titre secondaire',
  textes: [
    'Neque porro quisquam est qui dolorem ipsum.', 
    'Sit amet, consectetur, adipisci velit.', 
    'Dolorem ipsum quia.'
  ]
});
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
