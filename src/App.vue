<template>

<form @submit.prevent="add">
  <input v-model="texteTache" required placeholder="Nouvelle tâche"/>
  <button>Ajouter une tâche</button>
</form>
<ul>
  <li v-for="(todo, index) in todoListe" :key="todo.id">
    index: {{ index }} | 
    {{ todo.texte }} | 
    <button @click="remove(todo)">X</button>
  </li>
</ul>

</template>

<script setup>
import { ref } from 'vue';

var id = 0;

const texteTache = ref('');
const todoListe = ref([
  { id: id++, texte: 'Faire le lit' },
  { id: id++, texte: 'Faire le petit déjeuner' },
  { id: id++, texte: 'Aller au travail' }
]);

const add = () => {
  todoListe.value.push({ id: id++, texte: texteTache.value });
  texteTache.value = '';
}

const remove = todo => {
  todoListe.value = todoListe.value.filter(t => t !== todo);
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
