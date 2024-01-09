import {fetchReviewsList} from "~/stores/user/serverInterationMethods.js";

export const useUserStore = defineStore('user', () => {
    const token = ref('');
    const setToken = (token) => {
        localStorage.setItem('token', token.value)
    }
    const authorization = async ({login, password}) => {
        const res = await fetchReviewsList({login, password});

        if (res?.token) {
            setToken(res?.token);
            navigateTo('/');
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigateTo('/authorization');
    }

    return {
        token,
        authorization,
        logout
    }
})