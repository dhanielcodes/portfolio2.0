import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: import('@/views/Home.vue')
        },
        {
            path: '/design',
            name: 'Design',
            component: import('@/views/Design.vue')
        },
        {
            path: '/development',
            name: 'Development',
            component: import('@/views/Development.vue')
        },
        {
            path: '/resume',
            name: 'Resume',
            component: import('@/views/Resume.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: 'Lost',
            component: import('@/views/lost.vue')
        },
    ],
    history: createWebHistory()
})