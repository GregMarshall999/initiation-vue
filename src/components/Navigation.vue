<template>
    <nav>
        <router-link to="/">Page Principale</router-link> | 
        <router-link :to="{ name: 'Contact' }">Nous Contacter</router-link> | 
        <router-link :to="{ name: 'Message', params: { message: 'Test' } }">Message de Contact</router-link> | 
        <router-link v-if="!isConnecte" :to="{ name: 'Login' }" @click="connecter">Se Connecter</router-link>
        <router-link v-else :to="{ name: 'Home' }" @click="deconnecte">Se Déconnecter</router-link>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isConnecte = ref(localStorage.connecte && localStorage.connecte === 'true');

const connecter = () => {
    isConnecte.value = true;
}

const deconnecte = () => {
    console.log('test');
    localStorage.connecte = false;
    isConnecte.value = false;
}

</script>