<template>
    <div class="container">
        <header>
            <slot name="header">Je suis un titre, remplacez moi avec le nom de slot "header"</slot>
        </header>
        <main>
            <slot>Je suis du texte</slot>
        </main>
        <footer>
            <slot name="footer">Je suis en pied du composant</slot>
        </footer>
    </div>
</template>

<!--Posede le style container déjà défini sur la page par d'autres composants-->