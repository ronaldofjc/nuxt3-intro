const isLogged = false;
const loginUrl = "/login"
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== loginUrl && !isLogged) {
    return navigateTo(loginUrl)
  }
});