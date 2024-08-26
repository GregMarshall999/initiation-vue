<template>

{{ texte }}
<button @click="texte = 'test'">changer</button>

<p ref="refChargement">Je suis en train de charger</p>

</template>

<script>

export default {
  data() {
    return {
      texte: 'toast'
    }
  },
  beforeCreate() {
    console.log('before create', this.texte);
  }, 
  created() {
    console.log('created', this.texte);
  }, 
  beforeMount() {
    console.log('before mount');
  }, 
  mounted() {
    console.log('mounted');

    setTimeout(() => this.$refs.refChargement.textContent = 'Chargé', 2000);
  }, 

  beforeUpdate() {
    console.log('before update', this.texte);
  }, 
  updated() {
    console.log('updated', this.texte);
  }, 

  beforeUnmount() {
    console.log('before unmount');
  }, 
  unmounted() {
    console.log('unmounted');
  }
}

</script>

<!--
<script setup>
import { ref, onMounted } from 'vue';

const texte = ref('toast');

const refChargement = ref();
onMounted(() => {
  refChargement.value.textContent = 'chargé';
});

</script>-->

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
