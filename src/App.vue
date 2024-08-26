<template>

<h2>{{ message }}</h2>
<p>Le compte: {{ compteur.compte + 1 }}</p>

</template>

<script>

export default {
  data() {
    return {
      message: 'Coucou', 
      compteur: {
        compte: 0
      }
    }
  }
}

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
