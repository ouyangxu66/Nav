# Spring+Mybatis



项目结构

```java
.
├── main  // 主项目源码
│   ├── java
│   │   └── com
│   │       └── dawn
│   │           └── nav
│   │               ├── admin            // 后台管理模块
│   │               │   ├── controller   // 控制层
│   │               │   ├── mapper       // 数据访问层
│   │               │   └── service      // 业务层
│   │               │       └── impl     // 业务实现
│   │               ├── authentication   // 认证模块
│   │               │   ├── config       // 认证配置
│   │               │   ├── handler      // 认证处理器
│   │               │   │   ├── exception // 认证异常
│   │               │   │   └── login     // 登录方式
│   │               │   │       ├── email     // 邮箱登录
│   │               │   │       ├── github    // GitHub登录
│   │               │   │       ├── linuxDo   // LinuxDo登录
│   │               │   │       └── username  // 用户名登录
│   │               │   └── resourceApi  // 资源接口
│   │               │       ├── adminApi   // 管理端接口
│   │               │       ├── publicApi  // 公共接口
│   │               │       └── userApi    // 用户端接口
│   │               ├── exception       // 全局异常处理
│   │               ├── model           // 数据模型
│   │               │   ├── constant    // 常量定义
│   │               │   ├── dto         // 数据传输对象
│   │               │   ├── enums       // 枚举类型
│   │               │   ├── po          // 持久化对象
│   │               │   ├── properties  // 属性配置
│   │               │   └── vo          // 视图对象
│   │               ├── user            // 前台用户模块
│   │               │   ├── controller  // 控制层
│   │               │   ├── mapper      // 数据访问层
│   │               │   └── service     // 业务层
│   │               │       └── impl    // 业务实现
│   │               └── util            // 工具类
│   └── resources   // 配置文件/资源文件
│       └── com
│           └── dawn
│               └── nav
│                   ├── admin
│                   │   └── mapper    // 后台管理 MyBatis 映射配置
│                   └── user
│                       └── mapper    // 前台用户 MyBatis 映射配置
└── test           // 测试代码
    └── java
        └── com
            └── dawn
                └── nav

```



