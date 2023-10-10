// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.

// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
let palavra = 'orion'; // --> a variável pode receber valor via parâmetro ou armazená-lo via input
let contagem = 0;
const vogais: string[] = ["a", "e", "i", "o", "u"];

/**
 *  Função responsável por receber uma palavra, contar e retornar o número de vogais existentes
 * @param palavra 
 */
function retornarVogais(palavra: string): number {
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

retornarVogais(palavra);
console.log("Palavra: ", palavra);
console.log("Número de vogais: ", contagem + "\n");