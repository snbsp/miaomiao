export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    // 二级路由
    children: [
        {
            path: 'city',
            component: () => import('@/components/city')
        },
        {
            path: 'newPlaying',
            component: () => import('@/components/newPlaying')
        },
        {
            path: 'commingSoon',
            component: () => import('@/components/commingSoon')
        },
        {
            path: 'search',
            component: () => import('@/components/search')
        },
        // 重定向
        {
            path: '/movie',
            redirect: '/movie/newPlaying'
        }
    ]
};
