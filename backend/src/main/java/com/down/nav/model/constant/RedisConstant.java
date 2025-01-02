package com.down.nav.model.constant;

public class RedisConstant {
    public static final String EMAIL_REGISTER_CODE_PREFIX = "email:code:register:";
    public static final String EMAIL_LOGIN_CODE_PREFIX = "email:code:login:";
    public static final String EMAIL_RESET_CODE_PREFIX = "email:code:reset:";
    public static final Integer EMAIL_CODE_TIME_SECOND = 300;
    public static final String USER_REFRESH_TOKEN_PREFIX = "user:refreshToken:";
}
// Redis 相关的键前缀和配置常量
// 某个邮箱信息
// 验证码过期时间：定义了验证码的有效时间以控制其生命周期
// 用户刷新 token 的前缀