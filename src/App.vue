<template>

<p>Id Liste des tâches: {{ id }}</p>
<button @click="id++">Récupérer les prochaines tâches</button>

<p v-if="data">{{ data }}</p>
<p v-else>Chargement en cours...</p>

</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';

const id = ref(1);
const data = ref();

const recuperer = async () => {
  data.value = null;
  const resultat = await fetch(`https://jsonplaceholder.typicode.com/todos/${id.value}`);
  data.value = await resultat.json();
};

watch(id, recuperer);

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
