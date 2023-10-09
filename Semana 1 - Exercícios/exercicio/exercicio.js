"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
var palavra = 'orion'; // --> a variável pode receber valor via parâmetro ou armazená-lo via input
var contagem = 0;
/**
 *  Função responsável por receber uma palavra, contar e retornar o número de vogais existentes
 * @param palavra
 */
function retornarVogais(palavra) {
    // o loop percorre cada índice da palavra até o último
    for (var i = 0; i < palavra.length; i++) {
        // a condicional verifca se os índices correspondem às condições. Caso seja true, itera sobre a variável contagem
        if ((palavra[i] == 'a') || (palavra[i] == 'e') || (palavra[i] == 'i') || (palavra[i] == 'o') || palavra[i] == 'u') {
            // a cada vogal encontrada o contador acrescenta + 1 na variável 'contagem'
            contagem++;
        }
    }
    console.log("Palavra: ", palavra);
    console.log("Número de vogais: ", contagem + "\n");
}
retornarVogais(palavra);
