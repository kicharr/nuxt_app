import {fetchReviewsList} from "~/stores/user/serverInterationMethods.js";

export const useUserStore = defineStore('user', () => {
    let token = ref('');
    const setToken = (token) => {
        if (token !== undefined) {
            localStorage.setItem('token', token);
        }
    }
    const authorization = async ({login, password}) => {
        const res = await fetchReviewsList({login, password});

        if (res?.token) {
            token.value = res?.token;
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