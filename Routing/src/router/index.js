// DEFINE OUR ROUTING RULES


import {createRouter, createWebHistory} from "vue-router";
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CarView from '../views/CarView.vue';
import ContactViewVue from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";


const router  = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path : '/',
            component : HomeView,
            name: "home"
        },
        {
            path: '/test/:catchall(.*)*',
            redirect: '/'
        },
        {
            path: '/about',
            component: AboutView,
            name: "about"
        },
        {
            path: '/cars/:id',
            name: 'car',
            component: CarView,
            children: [
                {
                    path: "contact",
                    component: ContactViewVue
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name :"Not Found",
            component: NotFoundView
        }
        
    ]
})

export default router;