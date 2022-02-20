
let botao = document.querySelector("#btn-menu")
let sidebar = document.querySelector("#sidebar")
let iconSearch = document.querySelector(".lupa")

botao.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})

iconSearch.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})