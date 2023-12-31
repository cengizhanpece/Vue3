import { createRouter, createWebHistory } from "vue-router";


import QuizView from '../views/QuizView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: "home",
            component : HomeView
        },
        {
            path: '/quiz/:id',
            name: "quiz",
            component: QuizView
        }
    ]
})


export default router;