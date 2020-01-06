import Vue from 'vue';
import VueRouter from 'vue-router';
import movieRouter from './movie';
import mineRouter from './mine';
import ciremaRouter from './cirema';

Vue.use(VueRouter);

const routes = [
    movieRouter,
    mineRouter,
    ciremaRouter,
    // 重定向  当输入的路由不存在时自动跳转到movie
    {
        path: '/*',
        redirect: '/movie'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
