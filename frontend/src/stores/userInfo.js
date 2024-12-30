import { defineStore } from "pinia";
import { ref } from 'vue';

// 基于pinia定义Store -> 管理用户信息
export const useUserInfoStore = defineStore('userInfo',
  () => {
    const info = ref({})
    const setInfo = (newInfo) => {
      info.value = newInfo
    }
    const removeInfo = () => {
      info.value = {}
    }
    return { info, setInfo, removeInfo }
  },
  { persist: true }
)