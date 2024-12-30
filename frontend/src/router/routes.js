const routes = [
  {
    path: '/hello',
    name: 'hello',
    title: '你好',
    component: () => import('@/views/HelloPage.vue'),
  },
  // {
  //   path: '/',
  //   name: 'index',
  //   title: '首页',
  //   component: () => import('@/views/HomePage.vue'),
  // },
]
export default routes