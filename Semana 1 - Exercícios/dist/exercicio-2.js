"use strict";
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
/**
 * Filtra uma lista de objetos com base no 'id' fornecido.
 * @param id 'id' usado para filtrar a lista.
 * @param lista a lista de objetos a ser filtrada.
 * @returns um array de objetos da lista original que têm o 'id' correspondente.
 */
function consultarLista(id, lista) {
    return lista.filter(objeto => objeto.id === id);
}
// ------------------------------- Paradigma imperativo --------------------------------
/**
 * Função responsável por retornar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cuja biografia será retornada.
 * @returns retorna a biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function retornarBio(idLista) {
    var _a;
    // Consulta a lista completa usando o id passado e armazena o resultado em 'resultado'
    const listaFiltrada = consultarLista(idLista, lista);
    // Verifica se o elemento procurado existe na lista
    return ((_a = listaFiltrada[0]) === null || _a === void 0 ? void 0 : _a.bio) || mensagemErro;
}
/**
 * Função responsável por retornar o nome de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cujo nome será retornado.
 * @returns retorna o nome do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function retornarNome(idLista) {
    var _a;
    const listaFiltrada = consultarLista(idLista, lista);
    return ((_a = listaFiltrada[0]) === null || _a === void 0 ? void 0 : _a.name) || mensagemErro;
}
/**
  * Função responsável por alterar informações de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos na qual a operação será realizada.
 * @param textoNome novo texto para o nome, se fornecido.
 * @param textoBio novo texto para a biografia, se fornecida.
 * @returns retorna o objeto atualizado com os campos de nome e biografia atualizados, se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function alterarLista(idLista, lista, textoNome, textoBio) {
    const listaFiltrada = consultarLista(idLista, lista);
    if (listaFiltrada) {
        // verifica se os textos foram fornecidos antes de atualizar o campo
        (textoNome) ? listaFiltrada[0].name = textoNome : listaFiltrada;
        (textoBio) ? listaFiltrada[0].bio = textoBio : listaFiltrada;
    }
    else {
        mensagemErro;
    }
    return listaFiltrada;
}
/**
  * Função responsável por apagar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista id' do item cuja biografia será apagada.id' do item cuja biografia será apagada.
 * @param lista lista de objetos na qual a operação será realizada.
 * @returns retorna a lista de objetos atualizada após a remoção da biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function apagarItemLista(idLista, lista) {
    const listaFiltrada = consultarLista(idLista, lista);
    if (listaFiltrada) {
        listaFiltrada[0].bio = '';
    }
    else {
        mensagemErro;
    }
    return listaFiltrada;
}
console.log("Bio - Imperativo: ", retornarBio(idLista));
console.log("Nome - Imperativo: ", retornarNome(idLista));
console.log("Lista alterada - Imperativo: ", alterarLista(idLista, lista, textoNome, textoBio));
console.log("Item deletado -  Imperativo: ", apagarItemLista(idLista, lista));
// ------------------------------- Paradigma funcional --------------------------------
/**
  * Função responsável por retornar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cuja 'bio' será retornada.
 * @param lista lista de itens onde a consulta foi realizada.
 * @returns retorna a biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna a mensagem de erro.
 */
function funcionalRetornarBio(idLista, lista) {
    var _a;
    const listaFiltrada = consultarLista(idLista, lista);
    return ((_a = listaFiltrada[0]) === null || _a === void 0 ? void 0 : _a.bio) || mensagemErro;
}
/**
 * Função responsável por retornar o nome de um item da lista.
 * @param idLista 'id' do item cujo 'nome' será retornado.
 * @param lista lista de itens onde a consulta foi realizada.
 * @returns retorna o 'nome' do objeto correspondente ao 'id', se existir. Caso contrário, retorna a mensagem de erro.
 */
function funcionalRetornarNome(idLista, lista) {
    var _a;
    const listaFiltrada = consultarLista(idLista, lista);
    return ((_a = listaFiltrada[0]) === null || _a === void 0 ? void 0 : _a.name) || mensagemErro;
}
/**
 * Função respnsável por alterar informações de um item da lista, identificado pelo 'id' passado por parÂmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos onde a alteração será feita.
 * @param textoNome o novo texto para 'nome', se fornecido. Caso não seja, retorna o já existente.
 * @param textoBio o novo texto para 'bio', se fornecido. Caso não seja, retorna o já existente.
 * @returns retorna a lista alterada após as modificações
 */
function funcionalAlterarLista(idLista, lista, textoNome, textoBio) {
    const listaFiltrada = consultarLista(idLista, lista);
    const listaAlterar = listaFiltrada.map(objeto => {
        if (listaFiltrada) {
            (textoNome) ? listaFiltrada[0].name = textoNome : listaFiltrada;
            (textoBio) ? listaFiltrada[0].bio = textoBio : listaFiltrada;
        }
        return objeto;
    });
    return listaAlterar;
}
/**
 * Função responsável por apagar um item da lista passado por parâmetro.
 * @param idLista 'id' do item a ser apagado.
 * @param lista lista de objetos onde o item será removido.
 * @returns retorna a lista atualizada após a remoção do item correspondente ao id.
 */
function funcionalApagarItemLista(idLista, lista) {
    const listaFiltrada = consultarLista(idLista, lista);
    if (listaFiltrada) {
        return lista.filter(itemDeletar => itemDeletar.id !== idLista);
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
/**
 * Exibe as informações com base na opção selecionada para consulta
 */
function mostrarInfo() {
    const select = document.getElementById("cientistas");
    const nomeSelect = document.getElementById("nomeCientista");
    const bioSelect = document.getElementById("biografia");
    const opcaoSelect = document.getElementById("opcoes");
    const divNome = document.getElementById("divNome");
    const divBiografia = document.getElementById("divBiografia");
    if (bioSelect && nomeSelect && select && opcaoSelect) {
        const idSelecionado = parseInt(select.value);
        const opcaoSelecionada = parseInt(opcaoSelect.value);
        const nome = retornarNome(idSelecionado);
        const bio = retornarBio(idSelecionado);
        switch (opcaoSelecionada) {
            case 1:
                nomeSelect.innerHTML = nome.toString();
                divNome.style.display = "block";
                divBiografia.style.display = "none";
                break;
            case 2:
                bioSelect.innerHTML = bio.toString();
                divBiografia.style.display = "block";
                divNome.style.display = "none";
                break;
            case 3:
                nomeSelect.innerHTML = nome.toString();
                bioSelect.innerHTML = bio.toString();
                divNome.style.display = "block";
                divBiografia.style.display = "block";
                break;
            default:
                nomeSelect.innerHTML = '';
                bioSelect.innerHTML = '';
                divNome.style.display = "none";
                divBiografia.style.display = "none";
        }
    }
}
/**
 * Função responsável por exibir ou ocultar os inputs baseado na opção selecionada
 */
function mostrarInput() {
    const opcaoEditar = document.getElementById("opcaoEditar");
    const inputNomeDiv = document.getElementById("inputsNome");
    const inputBioDiv = document.getElementById("inputsBio");
    const selecionarEdicao = parseInt(opcaoEditar.value);
    switch (selecionarEdicao) {
        case 1:
            // Mostra apenas o input de nome
            inputNomeDiv.style.display = "block";
            inputBioDiv.style.display = "none";
            break;
        case 2:
            // Mostra apenas o input de biografia
            inputBioDiv.style.display = "block";
            inputNomeDiv.style.display = "none";
            break;
        case 3:
            // Mostra ambos os inputs
            inputNomeDiv.style.display = "block";
            inputBioDiv.style.display = "block";
            break;
        default:
            // Oculta todos os inputs
            inputNomeDiv.style.display = "none";
            inputBioDiv.style.display = "none";
    }
}
/**
 * Função responsável por alterar um atributo selecionado a partir do ID selecionado.
 * @returns um array de objetos com os atributos alterados.
 */
function alterarAtributo() {
    const idCientista = document.getElementById("cientistas");
    const inputsNome = document.getElementById("novoNome");
    const inputsBio = document.getElementById("novaBiografia");
    const id = parseInt(idCientista.value);
    const alterar = alterarLista(id, lista, inputsNome.value, inputsBio.value);
    const infoAlterada = document.getElementById("infoAlterada");
    if (infoAlterada)
        infoAlterada.innerHTML = JSON.stringify(alterar);
    const divInfoAlterada = document.getElementById("div-infoAlterada");
    if (divInfoAlterada)
        divInfoAlterada.style.display = "block";
    return alterar;
}
/**
 * Função responsável por excluir um atributo selecionado pelo usuário da lista de Cientistas.
 * @returns array de objetos com os atributos atualizados
 */
function excluirAtributo() {
    // Obtém o elemento de seleção de cientistas e de opção de exclusão do HTML
    const idCientista = document.getElementById("cientistas");
    const id = parseInt(idCientista.value);
    // Chama a função para excluir um objeto com base no ID e mantém a lista atualizada
    const listaAtualizada = funcionalApagarItemLista(id, lista);
    idCientista.remove(idCientista.selectedIndex);
    limparElementos();
    return listaAtualizada;
}
/**
 * Função responsável pelo elemtno de scrolling na tela
 */
function scrollToSection() {
    var section = document.querySelector('.section-leitura');
    section.scrollIntoView({ behavior: 'smooth' });
}
function limparElementos() {
    const nomeCientista = document.getElementById("nomeCientista");
    const biografia = document.getElementById("biografia");
    const divNome = document.getElementById("divNome");
    const divBiografia = document.getElementById("divBiografia");
    divNome.style.display = "none";
    divBiografia.style.display = "none";
    nomeCientista.innerHTML = '';
    biografia.innerHTML = '';
}
