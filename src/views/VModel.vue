<template></template>

<script lang="jsx">
import { ref } from 'vue'

export default {
    setup() {
        const texte = ref('Bienvenu dans le JSX de view')

        return () => (
            <div>
                <input v-model={texte.value} />
                <p>{texte.value}</p>
            </div>
        )
    }
}

</script>