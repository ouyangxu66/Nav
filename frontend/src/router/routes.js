const routes = [
  // 测试路由（view
  {
    path: '/hello',
    name: 'hello',
    title: '你好',
    component: () => import('@/views/HelloPage.vue'),
  },
  // 首页（view
  {
    path: '/',
    name: 'index',
    title: '首页',
    component: () => import('@/views/HomePage.vue'),
  },
  // 登录注册视图（view，下面为三个功能模块（module
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: () => import('@/views/login/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    title: '注册',
    component: () => import('@/views/login/RegisterPage.vue'),
  },
  {
    path: '/reset-pwd',
    name: 'reset-pwd',
    title: '重置密码',
    component: () => import('@/views/login/ResetPwdPage.vue'),
  },
  {
    path: '/auth/linux-do/callback',
    name: 'linux-do-callback',
    title: 'linux-do回调',
    component: () => import('@/views/callback/LinuxDoPage.vue'),
  },
  {
    path: '/auth/github/callback',
    name: 'github-callback',
    title: 'github回调',
    component: () => import('@/views/callback/GitHubPage.vue'),
  },
  // 用户视图（view
  // {
  //   path: '/nav/:username',
  //   name: 'user-nav',
  //   title: '用户导航',
  //   component: () => import('@/views/nav/NavPage.vue'),
  // },
  // 404视图（view
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