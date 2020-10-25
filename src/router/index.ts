import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import MainLayout from '../layouts/MainLayout.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: MainLayout,
        children: [
            {path: '', component: Home},
        ]
    },
    {
        path: '/history/',
        name: 'History',
        component: MainLayout,
        children: [
            {path: '', component: History, props: (route) => ({ type: route.query.historyType })},
        ]
    },
    {
        path: '*',
        name: 'Error 404',
        component: MainLayout,
        children: [
            {path: '', component: Error404},
        ]
    }

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
