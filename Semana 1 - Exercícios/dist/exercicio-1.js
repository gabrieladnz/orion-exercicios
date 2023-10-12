"use strict";
// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
let palavra = 'orion'; // --> a variável pode receber valor via parâmetro ou armazená-lo via input
const vogais = ["a", "á", "à", "â", "ã", "e", "é", "ê", "i", "í", "o", "ó", "ô", "õ", "u", "ú", "ü"];
/**
 *  Função responsável por receber uma palavra, contar e retornar o número de vogais existentes
 * @param palavra
*/
function retornarVogais(palavra) {
    let contagem = 0;
    // o loop percorre cada índice da palavra
    for (let i = 0; i < palavra.length; i++) {
        // O condicional verifica se os caracteres da palavra atual estão contidos no array de vogais
        if (vogais.includes(palavra[i])) {
            // a cada vogal encontrada o contador acrescenta + 1
            contagem++;
        }
    }
    return contagem;
}
/**
 * Função responsável por receber a variável 'palavra' e lidar com o formulário de contagem de vogais,
 * fazendo a manipulação no DOM.
 * @returns A palavra inserida pelo usuário
 */
function enviarFormulario() {
    // busca pelos elementos no HTML com base no seu ID
    let palavraInput = document.getElementById("palavra");
    let contagemInput = document.getElementById("contagem");
    // verifica se os dois elementos existem 
    if ((palavraInput) && (contagemInput)) {
        // atribui o valor inserido pelo usuário à variável palavra
        palavra = palavraInput.value;
        // chama a função de contagem e passa a palavra inserida como parâmetro
        let contagem = retornarVogais(palavra);
        // atualiza o elemento de contagem com o novo valor (quantidade de vogais)
        contagemInput.innerHTML = contagem.toString();
    }
    return palavra;
}
console.log("Contagem de vogais: " + retornarVogais(palavra));
console.log("Palavra: ", palavra);
