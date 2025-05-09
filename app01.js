// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "samuel"
let idade = 28

// Console e Debug
console.log(nome)
console.log(idade)
nome = "evelyn"
idade = "27"
console.log(nome, idade)

//tipos de dados 
// text == string
let cidade = "americana"

//numerico == number
let salario = 1500.35

//boleano == boolean 
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)



// Operadores
//     Operador Atribuição8 ( = )
//     Operadores aritméticos ( +, -, /, *)
console.log(10 + 15)
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma 
console.log(n1 - n2) // subtraçao
console.log(n1 / n2) // divisao
console.log(n1 * n2) // multiplicação 
console.log(n1 % 3)  // modulo (resto da divisão)

//     Operadores relacionais ( >, <, >=, <=, !=, ==)
console.log(n1 == n2) // igualdade 
console.log(n1 != n2) // diferente
console.log(n1 > n2) // maior 
console.log(10 < 10)  // menor
console.log(10 <= 10) // menor igual
console.log(150 >= 175) // maior igual 

//     Operadores lógicos (!, &&, || )
console.log(!10 > 2) // não - inverte o resultado, se for verdadeiro muda pra falso, se for falso muda para verdadeiro
console.log(!false)
console.log(10 > 2 && 35 < 100 && n1 > n2 && 100 < 90) // E - todas as verificaçoes precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10 < 2 || 100 == 150 || 57 == 57) // OU - apenas uma verificaçao precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificaçoes forem falsas 

// DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
// faça um codigo que acrescente 17% ao preço e imprima 
precoAcrescimo = preco + preco * 0.17
console.log("preco com acrescimo: " + precoAcrescimo.toFixed(2))
// faça um codigo que desconte 7% do preço e imprima
precoDesconto = preco - preco * 0.07
console.log("preco com desconto: " + precoDesconto.toFixed(2))





// Estrutura
//     Estrutura de controle/decisão
if (10 > 100) {
    console.log("10 é maior que 5")
} else {
    console.log("10 é menor que 100")
}
let idadeDoCandidato = 20
if (idadeDoCandidato >= 21) {
    console.log("pode dirigir")
} else {
    console.log("volte mais tarde")
}


// DESAFIO;
// faça um codigo que verifique se o salario do funcionario é maior que 5000, se for mostre a mensagem "salario OK" se não, mostre a mensagem "precisa de um aumento de x reais" 

let salariofunc = 3000
if (salariofunc > 5000) {
    console.log("salario OK")
} else {
    console.log("precisa de uma aumento de " + (5000 - salariofunc) + " reais ")
}


//     Laços de repetição
// quero mostras 10 vezes a mensagem "senac americana"
let controle = 1
while(controle <=10){
    console.log("senac americana")
    controle = controle + 1
}

controle = 0 // definição da variavel de controle
while(controle <= 100 ){ // condição
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostrar 10 vezes "senac americana"

for(let i=1; i<= 10; i=i+1){
    console.log("senac americana")
}

for(let i=1;i<=50; i=i+1){
    console.log(i)
}

// Arrays

// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************


