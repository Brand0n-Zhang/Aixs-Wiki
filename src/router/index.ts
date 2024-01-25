import { createRouter, createWebHashHistory } from 'vue-router';

import ListVue from '../views/list/List.vue';
import DetailVue from '../views/detail/Detail.vue';

const routes = [
    {
        path: '/',
        name: 'list',
        component: ListVue
    },
    {
        path: '/detail',
        name: 'detail',
        component: DetailVue
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});