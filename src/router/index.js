import Conditionnel from "@/views/Conditionnel.vue";
import Liste from "@/views/Liste.vue";
import Props from "@/views/Props.vue";
import Refs from "@/views/Refs.vue";
import Slots from "@/views/Slots.vue";
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
    },
    {
        path: '/liste', 
        name: 'Liste', 
        component: Liste
    },
    {
        path: '/slots', 
        name: 'Slots', 
        component: Slots
    }, 
    {
        path: '/refs', 
        name: 'Refs', 
        component: Refs
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;