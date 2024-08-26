<template>

<p>{{ texte }}</p>
<input :placeholder="placeholder" v-model="texte"/>
<!--v-model est bidirectionnel-->

<br>

<input placeholder="Entrez votre nom" v-model="nom"/>
<input placeholder="Entrez votre prenom" v-model="prenom"/>

<button @click="console.log(nom, prenom)">Envoyer mes informations</button>

</template>

<script setup>
import { ref } from 'vue';

const texte = ref('bidirectionnel');
const placeholder = ref('Entrez du texte');

const nom = ref('');
const prenom = ref('');

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
