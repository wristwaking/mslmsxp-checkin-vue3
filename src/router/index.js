import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import AdminLogin from '@/pages/AdminLogin.vue'
import AdminRegister from '@/pages/AdminRegister.vue'
import Mobile from '@/pages/Mobile.vue'
const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/login",
        component: AdminLogin
    },
    {
        path: "/register",
        component: AdminRegister
    },
    {
        path: "/mobile",
        component: Mobile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    if (isMobile && to.path.startsWith('/mobile')) {
        next();
    } else if (isMobile && !to.path.startsWith('/mobile')) {
        next({ path: '/mobile' });
    } else if (!isMobile && to.path.startsWith('/mobile')) {
        next({ path: '/' });
    } else {
        if (to.path.startsWith('/manage')) {
            if (!sessionStorage.getItem('license')) {
                next('/login');
            } else {
                next();
            }
        } else {
            next();
        }
    }
});

export default router
