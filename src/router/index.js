import Syntaxe from "@/views/Syntaxe.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/', 
        name: 'Syntaxe', 
        component: Syntaxe
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;