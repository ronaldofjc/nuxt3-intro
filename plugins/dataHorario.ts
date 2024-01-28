export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("data-horario", {
    mounted(el, binding) {
      const dataFormatada = new Date(el.innerText)
      el.innerHTML = formataData(dataFormatada, binding.value)
    },
  })
})

const formataData = (data: Date, tipo: string = "") => {
  switch (tipo) {
    case "dd/mm/yyyy":
      return data.toLocaleDateString("pt-BR")
    case "hh:mm":
      return data.toLocaleTimeString("pt-BR")
    default:
      return data.toLocaleString("pt-BR")
  }
}