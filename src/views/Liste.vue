<template></template>

<script lang="jsx">

export default {
    setup() {
        const items = ['Pomme', 'Poire', 'Abrico']

        return () => (
            <ul>
                {items.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        )
    }
}

</script>