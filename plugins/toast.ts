import Vue3Toastify, { toast, ToastContainerOptions, type Content } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(Vue3Toastify, {
    autoClose: 3000
  } as ToastContainerOptions);

  toast.error = (message: Content) =>
    toast(message, {
      type: "error",
      position: "bottom-right",
      icon: "❌",
      theme: "dark",
    });

  return {
    provide: {
      toast,
    },
  };
});