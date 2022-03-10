import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/HomePage';
import ToDoListPage from '@/pages/ToDoListPage';

Vue.use(VueRouter)

const routes = [
    { name: 'home',
      path: '/',
      component : HomePage
    },
    // {
    //     name:'todo',
    //     path: '/todo/id',
    //     component : () => import ('../pages/ToDoEditPage.vue')
    // },
    {
        name: 'todos',
        path: '/todos',
        component: ToDoListPage
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router