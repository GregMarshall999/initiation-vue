import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import MessageContact from "@/views/MessageContact.vue";
import NotFound from "@/views/NotFound.vue";
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
    }, 
    {
        path: '/messageContact/:message', 
        name: 'Message', 
        component: MessageContact, 
        props: true
    }, 
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound', 
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHashHistory(), 
    routes
});

export default router;