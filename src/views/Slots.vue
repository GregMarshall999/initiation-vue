<template></template>

<script lang="jsx">

const ComposantSlots = (_, { slots }) => {
    return (
        <div>
            <header>{slots.header()}</header>
            <main>{slots.default()}</main>
            <footer>{slots.footer()}</footer>
        </div>
    )
}

export default {
    components: {
        ComposantSlots
    },
    setup() {
        return () => (
            <ComposantSlots>
                {{
                    header: () => <h1>Contenu d'entete</h1>,
                    default: () => <p>Contenu Principal</p>,
                    footer: () => <p>Contenu pied de page</p>
                }}
            </ComposantSlots>
        )
    }
}

</script>