<template></template>

<script>
import { h, ref } from "vue"

export default {
    setup() {
        const compte = ref(0);
        const incrementer = () => {
            compte.value++;
        }

        return () => 
            h('div', { class: 'container'}, [
                h('h1', 'Compteur avec JSX'), 
                h('p', `Compte: ${compte.value}`),
                h('button', { onclick: incrementer }, 'Incrémenter')
            ]
        );
    }
}
</script>