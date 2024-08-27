<template>
  <h1>{{ titrePage }}</h1>

  <Affichage 
    v-on:envoyer-titre="titreEnvoye"
    :titre="passerAEnfant01.titre" 
    :textes="passerAEnfant01.textes"/>

  <Affichage 
    @envoyerTitre="titreEnvoye"
    :titre="passerAEnfant02.titre" 
    :textes="passerAEnfant02.textes"/>

  <AffichageSimple>
    J'ai initialisé le composant. Pour un slot simple.
  </AffichageSimple>

  <AffichageComplexe>
    <template v-slot:header>
      Titre du Lorem
    </template>

    <template #default>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida porttitor porttitor. Mauris dictum turpis ac velit feugiat, non vulputate neque tempor. Pellentesque in imperdiet metus. Aliquam erat volutpat. Pellentesque quis justo magna. Praesent sit amet elit neque. Etiam accumsan commodo nisl, in semper nibh feugiat non. Vestibulum felis lacus, pulvinar eu tellus ac, tincidunt egestas libero. Mauris iaculis sem elit, ac fermentum sem vulputate at. 
    </template>
    
    <template #footer>
      <p>Le footer du Lorem</p>
    </template>
  </AffichageComplexe>
</template>

<script setup>
import Affichage from './components/Affichage.vue';
import AffichageSimple from './components/AffichageSimple.vue';
import AffichageComplexe from './components/AffichageComplexe.vue';
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

const titrePage = ref('Titre de la page');
const titreEnvoye = titre => {
  titrePage.value = titre;
};
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
