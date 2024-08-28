<template></template>

<script lang="jsx">
import { ref, onMounted } from 'vue'

export default {
    setup() {
        const divRef = ref(null);

        onMounted(() => console.log(divRef.value));

        return () => <div ref={divRef}>C'est une div</div>
    }
}

</script>