export default defineNuxtRouteMiddleware(() => {
    if (!localStorage.getItem('token')) {
        return navigateTo('/authorization')
    }
})