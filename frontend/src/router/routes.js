const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: '你好',
    component: () => import('@/views/HelloPage.vue'),
  },
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/404',
    name: '404page',
    component: () => import('@/views/404/IndexPage.vue'),
  },
  // 未知路由重定向
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    hidden: true
  }
]
export default routes