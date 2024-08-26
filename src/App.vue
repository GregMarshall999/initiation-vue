<template>

<h1 :class="classTitre">Je suis un titre {{ texteCouleur }}</h1>

<button @click="changerCouleur">Changer la couleur</button>

</template>

<script setup>
import { ref } from 'vue';

const classTitre = ref('titre-rouge');
const texteCouleur = ref('rouge');

var etat = true;
const changerCouleur = () => {
  if(etat) {
    classTitre.value = 'titre-bleu';
    texteCouleur.value = 'bleu';
    
    etat = false;
  }
  else {
    classTitre.value = 'titre-rouge';
    texteCouleur.value = 'rouge';

    etat = true;
  }
}

</script>

<style scoped>
.titre-rouge {
  color: red;
}

.titre-bleu {
  color: blue;
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
