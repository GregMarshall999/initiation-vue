import Conditionnel from "@/views/Conditionnel.vue";
import Props from "@/views/Props.vue";
import Syntaxe from "@/views/Syntaxe.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/', 
        name: 'Syntaxe', 
        component: Syntaxe
    }, 
    {
        path: '/props', 
        name: 'Props', 
        component: Props
    }, 
    {
        path: '/conditionnel', 
        name: 'Conditionnel', 
        component: Conditionnel
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;