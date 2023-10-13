"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_service_1 = require("../request/request-service");
let idLista = 3; // --> a variável pode receber valor via parâmetro ou via input
let textoNome = "";
let textoBio = "";
const mensagemErro = "Objeto não encontrado.";
const lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// ------------------------------- Paradigma imperativo --------------------------------
/**
* Função responsável por retornar a biografia de um item da lista baseado no ID passado
* @returns a biografia (bio) do item correspondente, ou uma mensagem caso o objeto não seja encontrado
*/
function retornarBio(idLista) {
    // Consulta a lista completa usando o id passado e armazena o resultado em 'resultado'
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    // Verifica se o elemento procurado existe na lista
    return (retornoFiltrado === null || retornoFiltrado === void 0 ? void 0 : retornoFiltrado.bio) || mensagemErro;
}
/**
* Função responsável por retornar o nome de um item da lista baseado no ID passado
* @returns o nome (name) do item correspondente, ou uma mensagem caso o objeto não seja encontrado
*/
function retornarNome(idLista) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    return (retornoFiltrado === null || retornoFiltrado === void 0 ? void 0 : retornoFiltrado.name) || mensagemErro;
}
/**
 * Função responsável por alterar um item da lista baseado no ID passado
 * @returns o array original após a alteração dos atributos "bio" e "name
 */
function alterarLista(idLista, lista, textoNome, textoBio) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    if (retornoFiltrado) {
        (textoNome) ? retornoFiltrado.name = textoNome : retornoFiltrado;
        (textoBio) ? retornoFiltrado.bio = textoBio : retornoFiltrado;
    }
    else {
        mensagemErro;
    }
    return retornoFiltrado;
}
/**
* Função responsável por remover um item da lista baseado no ID passado
* @returns o array original após a remoção do item desejado
*/
function apagarItemLista(idLista, lista) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    if (retornoFiltrado) {
        delete retornoFiltrado.bio;
    }
    else {
        mensagemErro;
    }
    return retornoFiltrado;
}
console.log("Bio - Imperativo: ", retornarBio(idLista));
console.log("Nome - Imperativo: ", retornarNome(idLista));
console.log("Lista alterada - Imperativo: ", alterarLista(idLista, lista, textoNome, textoBio));
console.log("Item deletado -  Imperativo: ", apagarItemLista(idLista, lista));
// ------------------------------- Paradigma funcional --------------------------------
/**
 * Retorna a propriedade 'bio' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @returns string com o valor da propriedade 'bio'
 */
function funcionalRetornarBio(idLista, lista) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);
    return (retornoFiltrado === null || retornoFiltrado === void 0 ? void 0 : retornoFiltrado.bio) || mensagemErro;
}
/**
 * Retorna a propriedade 'name' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @returns string com o valor da propriedade 'name'
 */
function funcionalRetornarNome(idLista, lista) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);
    return (retornoFiltrado === null || retornoFiltrado === void 0 ? void 0 : retornoFiltrado.name) || mensagemErro;
}
/**
 * Altera a propriedade 'bio' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @param texto o novo valor fornecido pelo usuário e atribuído à propriedade
 * @returns string retornando o novo valor
 */
function funcionalAlterarLista(idLista, lista, textoNome, textoBio) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);
    const listaAlterar = listaFiltrada.map(objeto => {
        if (retornoFiltrado) {
            (textoNome) ? retornoFiltrado.name = textoNome : retornoFiltrado;
            (textoBio) ? retornoFiltrado.bio = textoBio : retornoFiltrado;
        }
        return objeto;
    });
    return listaAlterar;
}
/**
 * Remove a propriedade 'name' do objeto baseado no ID fornecido.
 * @param idLista id passado por parâmetro
 * @returns propriedade removida
 */
function funcionalApagarItemLista(idLista, lista) {
    const listaFiltrada = (0, request_service_1.consultarLista)(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);
    if (retornoFiltrado) {
        return lista.filter(itemDeletar => itemDeletar.id !== idLista);
        // return retornoFiltrado.name;
    }
    else {
        return lista;
    }
}
console.log("\n");
console.log("Bio - Funcional: ", funcionalRetornarBio(idLista, lista));
console.log("Nome - Funcional: ", funcionalRetornarNome(idLista, lista));
console.log("Alterar lista - Funcional: ", funcionalAlterarLista(idLista, lista, textoNome, textoBio));
console.log("Item deletado - Funcional: ", funcionalApagarItemLista(idLista, lista));
