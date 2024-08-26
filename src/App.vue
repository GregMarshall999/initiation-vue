<template>

<h1 :class="etat ? 'titre-rouge' : 'titre-bleu'">Je suis un titre {{ etat ? 'rouge' : 'bleu' }}</h1>

<button @click="etat = !etat">Changer la couleur</button>

</template>

<script setup>
import { ref } from 'vue';

const etat = ref(true);

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
