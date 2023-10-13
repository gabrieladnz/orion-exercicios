import { consultarLista } from "../request/request-service";

let idLista: number = 3; // --> a variável pode receber valor via parâmetro ou via input
let textoNome: string = "";
let textoBio: string = "";
const mensagemErro: string = "Objeto não encontrado."

const lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }];

interface Cientistas {
    id: number;
    name: string;
    bio: string;
}

// ------------------------------- Paradigma imperativo --------------------------------

/**
 * Função responsável por retornar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cuja biografia será retornada.
 * @returns retorna a biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function retornarBio(idLista: number): string {
    // Consulta a lista completa usando o id passado e armazena o resultado em 'resultado'
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    // Verifica se o elemento procurado existe na lista
    return retornoFiltrado?.bio || mensagemErro;
}

/**
 * Função responsável por retornar o nome de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cujo nome será retornado.
 * @returns retorna o nome do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function retornarNome(idLista: number): string {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;
    return retornoFiltrado?.name || mensagemErro;
}

/**
  * Função responsável por alterar informações de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos na qual a operação será realizada.
 * @param textoNome novo texto para o nome, se fornecido.
 * @param textoBio novo texto para a biografia, se fornecida.
 * @returns retorna o objeto atualizado com os campos de nome e biografia atualizados, se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function alterarLista(idLista: number, lista: any[], textoNome?: string, textoBio?: string): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;

    if (retornoFiltrado) {
        // verifica se os textos foram fornecidos antes de atualizar o campo
        (textoNome) ? retornoFiltrado.name = textoNome : retornoFiltrado;
        (textoBio) ? retornoFiltrado.bio = textoBio : retornoFiltrado;
    } else {
        mensagemErro;
    }

    return retornoFiltrado;
}

/**
  * Função responsável por apagar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista id' do item cuja biografia será apagada.id' do item cuja biografia será apagada.
 * @param lista lista de objetos na qual a operação será realizada.
 * @returns retorna a lista de objetos atualizada após a remoção da biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function apagarItemLista(idLista: number, lista: any[]): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = (listaFiltrada.length > 0) ? listaFiltrada[0] : null;

    if (retornoFiltrado) {
        delete retornoFiltrado.bio;
    } else {
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
  * Função responsável por retornar a biografia de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cuja 'bio' será retornada.
 * @param lista lista de itens onde a consulta foi realizada.
 * @returns retorna a biografia do objeto correspondente ao 'id', se existir. Caso contrário, retorna a mensagem de erro.
 */
function funcionalRetornarBio(idLista: number, lista: any[]): string {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);

    return retornoFiltrado?.bio || mensagemErro;
}

/**
 * Função responsável por retornar o nome de um item da lista.
 * @param idLista 'id' do item cujo 'nome' será retornado.
 * @param lista lista de itens onde a consulta foi realizada.
 * @returns retorna o 'nome' do objeto correspondente ao 'id', se existir. Caso contrário, retorna a mensagem de erro.
 */
function funcionalRetornarNome(idLista: number, lista: any[]): string {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);

    return retornoFiltrado?.name || mensagemErro;
}

/**
 * Função respnsável por alterar informações de um item da lista, identificado pelo 'id' passado por parÂmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos onde a alteração será feita.
 * @param textoNome o novo texto para 'nome', se fornecido. Caso não seja, retorna o já existente.
 * @param textoBio o novo texto para 'bio', se fornecido. Caso não seja, retorna o já existente.
 * @returns retorna a lista alterada após as modificações
 */
function funcionalAlterarLista(idLista: number, lista: any[], textoNome?: string, textoBio?: string): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);
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
 * Função responsável por apagar um item da lista passado por parâmetro.
 * @param idLista 'id' do item a ser apagado.
 * @param lista lista de objetos onde o item será removido.
 * @returns retorna a lista atualizada após a remoção do item correspondente ao id.
 */
function funcionalApagarItemLista(idLista: number, lista: any[]): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);
    const retornoFiltrado = listaFiltrada.find(objeto => objeto.id === idLista);

    if (retornoFiltrado) {
        return lista.filter(itemDeletar => itemDeletar.id !== idLista);
        // return retornoFiltrado.name;
    } else {
        return lista;
    }
}

console.log("\n");
console.log("Bio - Funcional: ", funcionalRetornarBio(idLista, lista));
console.log("Nome - Funcional: ", funcionalRetornarNome(idLista, lista));
console.log("Alterar lista - Funcional: ", funcionalAlterarLista(idLista, lista, textoNome, textoBio));
console.log("Item deletado - Funcional: ", funcionalApagarItemLista(idLista, lista));