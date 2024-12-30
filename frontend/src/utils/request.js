import axios from 'axios';

import { useTokenStore } from "@/stores/token.js";
import alertUtil from "./alert";
import router from "@/router";

const baseURL = '/api';
const instance = axios.create({ baseURL })

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 为请求添加 token
    const tokenStore = useTokenStore();
    if (tokenStore.token) {
      config.headers.Authorization = `Bearer ${tokenStore.token.token}`; // 使用 Authorization 头
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
)

// 响应拦截器
instance.interceptors.response.use(
  result => {
    // 检查响应类型是否为 blob，表示文件下载
    const contentType = result.headers['content-type'] || '';
    if (contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || contentType.includes('application/pdf')) {
      // 如果是文件类型（例如 Excel 文件），直接返回 blob 数据
      return result;
    }
    if (result.data.code == 0) {
      return result.data;
    }
    alertUtil.message(result.data.message ? result.data.message : "服务异常", "danger")
    return Promise.reject(result.data)
    // 否则弹出消息错误并返回被拒绝的Promise
  },
  err => {
    const originalRequest = err.config;
    if (err.response.status == 401 && !originalRequest.url.includes('/api/public/refreshToken')) {
      const tokenStore = useTokenStore();
      const refreshToken = tokenStore.token.refreshToken;
      if (refreshToken) {
        // 发送刷新 token 请求
        return new Promise(function (resolve, reject) {
          axios.post('/api/public/refreshToken', null, { params: { refreshToken } })
            .then(({ data }) => {
              if (data.code == 0) { // 确保刷新成功
                // 更新 tokenStore
                tokenStore.setToken(data.data);
                // 更新 Authorization 头
                instance.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`;
                originalRequest.headers.Authorization = `Bearer ${data.data.token}`;
                // 重试原始请求
                resolve(instance(originalRequest));
              } else {
                tokenStore.removeToken();
                router.push('/login');
                alertUtil.message(data.message || "请重新登录", "danger");
                reject(new Error(response.data.message || "刷新令牌失败"));
              }
            })
            .catch((err) => {
              tokenStore.removeToken();
              router.push('/login');
              alertUtil.message("刷新令牌失败，请重新登录", "danger");
              reject(err);
            })
        });
      }
    }
    else if (err.response.status == 401) {
      const tokenStore = useTokenStore();
      tokenStore.removeToken();
      alertUtil.message("请先登陆", "danger")
      router.push("/login")
    }
    else {
      alertUtil.message("服务异常", "danger")
    }
    return Promise.reject(err);
  }
)

export default instance;