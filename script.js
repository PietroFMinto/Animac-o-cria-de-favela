const trocarTemaClaro = document.querySelector(".Claro")
const trocarTemaEscuro = document.querySelector(".Escuro")

trocarTemaClaro.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "#aaaaaa"
    document.querySelector("body").style.color = "rgb(48, 47, 47)"
    document.querySelector("body").style.transition = "1s"
    document.querySelector(".text-box").style.backgroundColor = "rgb(209, 208, 208)"
    document.querySelector("header").style.backgroundColor = "rgb(209, 208, 208)"
    document.querySelector("header").style.transition = "1s"
    document.querySelector(".text-box").style.transition = "1s"
})

trocarTemaEscuro.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "rgb(48, 47, 47)"
    document.querySelector("body").style.color = "#aaaaaa"
    document.querySelector("body").style.transition = "1s"
    document.querySelector(".text-box").style.backgroundColor = "rgb(22, 19, 19)"
    document.querySelector("header").style.backgroundColor = "rgb(22, 19, 19)"
    document.querySelector("header").style.transition = "1s"
    document.querySelector(".text-box").style.transition = "1s"
})  
