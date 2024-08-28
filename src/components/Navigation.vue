<template>
    <RouterLink 
        v-for="route in useRouter().getRoutes()" :key="route.name" 
        :to="{ name: route.name }">{{ route.name }}</RouterLink>
</template>

<script setup>
import { useRouter } from 'vue-router'
</script>