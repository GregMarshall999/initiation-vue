<template>
    <div class="container">
        <h1>{{ titre }}</h1>
        <p v-for="text in textes">{{ text }}</p>
    </div>

    <span v-if="obj && obj.test">
        {{ obj.test }}
    </span>
</template>

<script setup>

const props = defineProps({
    titre: String, 
    textes: Array, 
    obj: {
        type: Object, 
        required: true
    }
});

</script>

<style>

.container {
    border: 1px solid rgb(79, 175, 111);
    border-radius: 10px;
    background-color: rgb(130, 206, 155);
    color: rgb(87, 87, 87);
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;

    h1 {
        text-decoration: underline;
        margin-bottom: 20px;
    }
}

</style>