<template>

<h2>{{ message }}</h2>
<p>Le compte: {{ compteur.compte + 1 }}</p>

</template>

<!-- Exemple Option API
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

</script>-->

<!-- Exemple Composition "hybride"
<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    //fonctionnalité message
    const message = ref('Coucou');
    //fonctions pour message
    
    //---------------------------------

    //fonctionnalité compteur
    const compteur = reactive({
      compte: 0
    });
    //fonctions pour compteur

    return { message, compteur };
  }
}
</script>-->

<!--Exemple Composition-->
<script setup>
import { ref, reactive } from 'vue';

//fonctionnalité message
const message = ref('Coucou');
//fonctions pour message

//---------------------------------

//fonctionnalité compteur
const compteur = reactive({
  compte: 0
});
//fonctions pour compteur

</script>

<style scoped>
h2 {
  color: red;
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
