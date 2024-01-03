import { createRouter, createWebHashHistory } from 'vue-router';

import ListVue from '../views/list/List.vue';
const routes = [
    {
        path: '/',
        component: ListVue
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});