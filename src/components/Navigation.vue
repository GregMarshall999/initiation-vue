<template>
    <nav>
        <router-link to="/">Page Principale</router-link> | 
        <router-link :to="{ name: 'Contact' }">Nous Contacter</router-link> | 
        <router-link :to="{ name: 'Message', params: { message: 'Test' } }">Message de Contact</router-link>
    </nav>
</template>