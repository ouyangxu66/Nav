#  Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



项目结构

```bash
.
├── README.md                 
├── index.html                # 应用的主 HTML 文件，注入 Vue 实例
├── package-lock.json         
├── package.json              
├── public                    # 静态资源文件夹，存放不会被打包的文件（如 favicon、静态图片）
├── src                       
│   ├── App.vue               # Vue 应用的根组件，所有页面组件的入口
│   ├── api                   # 封装 API 请求模块的文件夹
│   ├── assets                # 静态资源，通过模块化方式引入
│   ├── components            # 存放通用的 Vue 组件
│   ├── main.js               # Vue 应用的入口文件，初始化应用并挂载到 DOM
│   ├── router                # 路由相关文件夹
│   │   ├── index.js          # 路由配置入口文件，创建routes实例并导出
│   │   └── routes.js         # 自定义路由规则
│   ├── stores                # 状态管理（Pinia）
│   ├── utils                 # 工具函数文件夹
│   └── views                 # 页面级别的组件
│       ├── HelloPage.vue     # 示例页面组件
│       └── Homepage.vue      # 应用的主页组件
└── vite.config.js            # Vite 的配置文件
```

