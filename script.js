const trocarTemaClaro = document.querySelector(".Claro")
const trocarTemaEscuro = document.querySelector(".Escuro")

trocarTemaClaro.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("body").style.color = "rgb(48, 47, 47)"
    document.querySelector("body").style.transition = "1s"
})

trocarTemaEscuro.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "rgb(48, 47, 47)"
    document.querySelector("body").style.color = "#aaaaaa"
    document.querySelector("body").style.transition = "1s"
})
