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
export const checkUserAuth = () => !!localStorage.getItem('token');

export const closeModalClick = (e, selector) => {
    const element = document.querySelector('selector');
    // Проверка на клик вне области .selector
    if (!e.composedPath().includes(element)) return true;
}
export const stringsLengthHandler = (str, limit) => {
    if (str?.length >= limit) {
        return str.slice(0, limit) + '...';
    }
    return str;
}

// Commit for test

// Commit for test 2

// Commit for test 3