import {useUserStore} from "~/stores/user/index.js";

export const getPreview = (str) => {
    return `_nuxt/assets/images/about-page/${str}`
}
export const checkUserToken = () => {
    const userStore = useUserStore();

    if (localStorage.getItem('token')) {
        alert('You are already logged in!');
    } else {
        return navigateTo('/authorization');
    }
}