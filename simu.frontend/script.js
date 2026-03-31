// Seletores Basicos
let titulo = document.getElementById("titulo")
let meuParagrafo = document.getElementById("meuParagrafo")
let itens = document.getElementsByTagName("li")

// QuerySelector e QuerySelectorAll
let lista = document.querySelector(".lista")
let todos = document.querySelectorAll(".lista li")

// Seletores de mudança de titulo
let inpuTitulo = document.querySelector('#meuInputTitulo')
let btnEnviarTitulo = document.querySelector("#btnEnviarTitulo")

// Seletores de mudança de paragrafo
let inputParagrafo = document.querySelector('#meuInputParagrafo')
let btnEnviarParagrafo = document.querySelector('#btnEnviarParagrafo')

// Seletores de mudança da Lista
let formulario = document.querySelector("#meuForm")
let input = document.querySelector("#meuInput")
let btnEnviar = document.querySelector("#btnEnviar")

// Seletores do botao contador de itens da Lista
let btnContador = document.querySelector("#btnContator")
let resultadoContador = document.querySelector("#resultado2")

// Seletores do Botao contador de cliques
let botao = document.querySelector("#btn")
let resultado = document.querySelector("#resultado")

//-------------------------------------------------------

let contador = 0
botao.addEventListener("click", () => {
    if (contador == 0){
        resultado.innerHTML = "<b>Voce clicou no Botao</b>"
        contador++
    } else if (contador > 0 && contador < 5) {
        resultado.innerHTML = "<b>Voce clicou no Botao de novo!</b>"
        contador++
    } else if (contador >= 5) {
        resultado.innerHTML = `<b>Voce clicou ${contador}x no Botao! Chega fi acabou a graça </b>`
        contador++
    } 
})

// Mudança de titulo com o formulário
btnEnviarTitulo,addEventListener("click", (e) => {
    e.preventDefault()
    titulo.innerText = inpuTitulo.value
    inpuTitulo.value = ""
})

// Mudança do Paragrafo com o Formulário
btnEnviarParagrafo.addEventListener("click", (e) => {
    e.preventDefault()
    meuParagrafo.innerText = inputParagrafo.value
    inputParagrafo.value = ""
})