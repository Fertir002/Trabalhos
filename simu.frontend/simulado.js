// ==============================
// SIMULADO PRÁTICO -> DOM + EVENTOS
// ==============================

// ==============================
// 1. SELETORES - 1 ponto
// ==============================

// Seletores básicos (Modo antigo de acessar elementos

// TODO 1:
// Crie uma variável chamada "titulo" utilizando getElementById
// DICA: o id do elemento é "titulo" (confira no arquivo HTML)
let titulo = document.getElementById("titulo")

// TODO 2:
// Crie uma variável chamada "meuParagrafo" utilizando getElementById
// DICA: o id do elemento é "meuParagrafo" (confira no arquivo HTML)
let meuParagrafo = document.getElementById("meuParagrafo")

// TODO 3:
// Crie uma variável chamada "itens" utilizando getElementsByTagName
// DICA: selecione todas as tags <li> da página (confira no arquivo HTML)
let itens = document.getElementsByTagName("li")

// Seletores modernos (querySelector e querySelectorAll)

// TODO 4:
// Crie uma variável chamada "lista" utilizando querySelector
// DICA: selecione pela class (.lista) (confira no arquivo HTML)
let lista = document.querySelector(".lista")

// TODO 5:
// Crie uma variável chamada "todos" utilizando querySelectorAll
// DICA: selecione todos os elementos com a classe (.lista li)
let todos = document.querySelectorAll(".lista li")

//------------------------------------------------------------
// Seletores de mudança do titulo (usando querySelector)

// TODO 6:
// Crie uma variável chamada "inputTitulo"
// DICA: selecione o input pelo id (#meuInputTitulo) (confira no arquivo HTML)
let inpuTitulo = document.querySelector('#meuInputTitulo')

// TODO 7:
// Crie uma variável chamada "btnEnviarTitulo"
// DICA: selecione o botão pelo id (#btnEnviarTitulo) (confira no arquivo HTML)
let btnEnviarTitulo = document.querySelector("#btnEnviarTitulo")

//------------------------------------------------------------
// Seletores de mudança do parágrafo usando querySelector

// TODO 8:
// Crie uma variável chamada "inputParagrafo"
// DICA: selecione o textarea pelo id (#meuInputParagrafo) (confira no arquivo HTML)
let inputParagrafo = document.querySelector('#meuInputParagrafo')

// TODO 9:
// Crie uma variável chamada "btnEnviarParagrafo"
// DICA: selecione o botão pelo id (#btnEnviarParagrafo) (confira no arquivo HTML)
let btnEnviarParagrafo = document.querySelector('#btnEnviarParagrafo')

//------------------------------------------------------------
// Seletores da lista usando querySelector

// TODO 10:
// Crie uma variável chamada "formulario"
// DICA: selecione o formulário pelo id (#meuForm) (confira no arquivo HTML)
let formulario = document.querySelector("#meuForm")

// TODO 11:
// Crie uma variável chamada "input"
// DICA: selecione o input da lista (#meuInput) (confira no arquivo HTML)
let input = document.querySelector("#meuInput")

// TODO 12:
// Crie uma variável chamada "btnEnviar"
// DICA: selecione o botão de enviar da lista (#btnEnviar) (confira no arquivo HTML)


//------------------------------------------------------------
// Seletores do contador usando querySelector

// TODO 13:
// Crie uma variável chamada "btnContador"
// DICA: selecione o botão de contador (#btnContador) (confira no arquivo HTML)
// TODO 14:
// Crie uma variável chamada "resultadoContador"
// DICA: selecione o elemento onde será exibido o resultado (#resultado2) (confira no arquivo HTML)

//------------------------------------------------------------
// Seletores do botão simples (contador de cliques)

// TODO 15:
// Crie uma variável chamada "botao"
// DICA: selecione o botão pelo id (#btn) (confira no arquivo HTML)

// TODO 16:
// Crie uma variável chamada "resultado"
// DICA: selecione o elemento onde será exibida a mensagem (#resultado) (confira no arquivo HTML)

//------------------------------------------------------------
// ==============================
// 2. EVENTO - BOTÃO SIMPLES - Valendo 2 Pontos
// ==============================

// TODO 17:
// Crie uma variável chamada "contador" iniciando em 0

// TODO 18:
// Crie um evento de clique no botão "btn" (contador de cliques) que:
// - Use addEventListener("click")
// - Se contador == 0 → exiba: "Você clicou no botão!"
// - Se contador for entre 1 e 4 → exiba: "Você clicou novamente!"
// - Se contador >= 5 → exiba: `Você clicou ${X} vezes!` (use template string para mostrar o número de cliques)
// - Não esqueça de incrementar o contador (contador++)

// ==============================
// 3. ALTERAR TÍTULO - 2 pontos
// ==============================

// TODO 19:
// Crie um evento de clique no botão "btnEnviarTitulo" (use addEventListener)
// Dentro do evento:
// - Use preventDefault()
// - Pegue o valor digitado no inputTitulo (use .value)
// - Altere o texto do título (use innerText)
// - Limpe o campo (use inputTitulo.value = "")

// ==============================
// 4. ALTERAR PARÁGRAFO - 1 Ponto
// ==============================

// TODO 20:
// Crie um evento de clique no botão "btnEnviarParagrafo" (use addEventListener)
// Dentro do evento:
// - Use preventDefault()
// - Altere o texto do parágrafo meuParagrafo (use innerText) para o valor digitado no inputParagrafo (use .value)
// - Limpe o campo (use inputParagrafo.value = "")

// ==============================
// 5. ADICIONAR ITEM NA LISTA - 1 Ponto
// ==============================

// TODO 21:
// Crie um evento de submit no formulário
// DICA: formulario.addEventListener("submit", ...)

// TODO 22:
// Dentro do evento:
// - Use o preventDefault()

// TODO 23:
// Crie uma variavel de nome novoItem e atribua a ela um novo elemento <li>
// DICA: document.createElement("li")

// TODO 24:
// Verifique se o valor digitado no input é um número
// DICA:
// - Use a estrutura condicional if / else
// - Use !isNaN(input.value) para verificar se o valor é um número

// TODO 25:
// Se for número:
// - Mostrar: `Numero: ${X}`
// - Mudar a cor de fundo do item manipulando o style (ex: novoItem.style.backgroundColor = "rgb(255, 142, 155)")
// - use textContent para colocar o texto dentro do <li>

// TODO 26:
// Se NÃO for número:
// - Mostrar: `String: ${X}`
// - use textContent para colocar o texto dentro do <li>

// TODO 27:
// Crie um botão "Remover" usando createElement("button")
// Coloque o texto "X" dentro do botão usando textContent (Ou Pode usar Remover)

// TODO 28:
// Adicione um evento de clique no botão remover 
// A ação deve remover o item da lista
// DICA: novoItem.remove()

// TODO 29:
// Adicione o botão remover dentro do <li>
// DICA: use appendChild para colocar o botão dentro do <li>

// TODO 30:
// Adicione o <li> dentro da lista (appendChild)

// TODO 31:
// Limpe o input após adicionar o item

// ==============================
// 6. CONTADOR DE ITENS - 1 Ponto
// ==============================

// TODO 32:
// Crie um evento de clique no botão "btnContador" ja criado 
// (use addEventListener)

// TODO 33:
// Dentro do evento:
// - Conte quantos itens existem na lista
// DICA: use lista.children.length para contar os itens (dinâmico) ou querySelectorAll("li").length

// TODO 34:
// Exiba o resultado no elemento resultadoContador ja criado:
// - Exiba: "Temos: 1 item"
// - Ou caso tenha mais de um item:
// - "Temos: X itens"

// ==============================
// 7. DESAFIO EXTRA (VALENDO BONUS 1 PONTO SE TUDO FUNCIONAR) 
// ==============================

// TODO 35:
// Não permitir adicionar item vazio
// DICA: usar input.value.trim()

// TODO 36:
// Criar um botão "Limpar Lista"
// Ao clicar:
// - remover todos os itens da lista

// TODO 37:
// Contar quantos itens são números e quantos são strings
// DICA:
// - Percorrer os <li>
// - Verificar o texto de cada item 
// - Incrementar contadores de números e strings
// - Use textContent para exibir o resultado (ex: "Temos X números e Y strings na lista")
// - Use a Lógica ao seu favor, voce ja verifica se é numero ou string no momento da adição, 
// então pode criar variáveis para ir contando cada tipo e exibir o resultado no contador de itens (ex: "Temos: X itens (Y números e Z strings)")