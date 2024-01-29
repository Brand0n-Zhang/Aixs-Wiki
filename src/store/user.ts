import { defineStore } from 'pinia';
import { ref } from 'vue';


export const userStorePinia = defineStore('dBStore', () => {
    const nickname = ref('');
    const token = ref('');

    const setUserInfo = (t: string, n: string) => {
        token.value = t;
        nickname.value = n;
        localStorage.token = t;
        localStorage.nickname = n;
    };

    return {
        setUserInfo
    };
});