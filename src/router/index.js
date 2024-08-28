import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import MessageContact from "@/views/MessageContact.vue";
import NotFound from "@/views/NotFound.vue";
import Profil from "@/views/Profil.vue";
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
        path: '/login', 
        name: 'Login', 
        component: Login, 
        meta: {
            titrePage: 'Se Connecter'
        }
    },
    {
        path: '/profil', 
        name: 'Profil', 
        component: Profil,
        meta: {
            titrePage: 'Mon Profil'
        }
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

router.beforeEach(async (to, _, next) => {
    //console.log(localStorage.connecte);

    const titlePages = ['Login', 'Profil'];

    if(titlePages.includes(to.name)) {
        document.title = `${to.meta.titrePage}`
    } 
    else {
        document.title = 'Initiation Vue'
    }

    if(to.name === 'Profil' && 
        (!localStorage.connecte || localStorage.connecte === 'false')) {
        next({ name: 'Home' });
    } else {
        next();
    }

    //console.log(to);
    //console.log(from);
});

export default router;