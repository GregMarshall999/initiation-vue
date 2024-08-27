import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    }, 
    {
        path: '/contact', 
        name: 'Contact', 
        component: Contact
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;