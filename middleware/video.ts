export default defineNuxtRouteMiddleware((to, from) => {
  const parameter = +to.params.id;
  if (isNaN(parameter) || parameter < 0) {
    return navigateTo("/videos");
  }
});