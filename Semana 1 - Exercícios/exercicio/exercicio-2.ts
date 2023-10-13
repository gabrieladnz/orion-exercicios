import { consultarLista } from "../request/request-service";

let idLista: number = 3; // --> a variável pode receber valor via parâmetro ou via input
let textoNome: string = "";
let textoBio: string = "";
const mensagemErro: string = "Objeto não encontrado."

const lista: Cientistas[] = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

export interface Cientistas {
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
    // Verifica se o elemento procurado existe na lista
    return listaFiltrada[0]?.bio || mensagemErro;
}

/**
 * Função responsável por retornar o nome de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item cujo nome será retornado.
 * @returns retorna o nome do objeto correspondente ao 'id', se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function retornarNome(idLista: number): string {
    const listaFiltrada = consultarLista(idLista, lista);
    return listaFiltrada[0]?.name || mensagemErro;
}

/**
  * Função responsável por alterar informações de um item na lista, identificado pelo 'id' passado por parâmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos na qual a operação será realizada.
 * @param textoNome novo texto para o nome, se fornecido.
 * @param textoBio novo texto para a biografia, se fornecida.
 * @returns retorna o objeto atualizado com os campos de nome e biografia atualizados, se existir. Caso contrário, retorna null ou uma mensagem de erro.
 */
function alterarLista(idLista: number, lista: Cientistas[], textoNome?: string, textoBio?: string): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);

    if (listaFiltrada) {
        // verifica se os textos foram fornecidos antes de atualizar o campo
        (textoNome) ? listaFiltrada[0].name = textoNome : listaFiltrada;
        (textoBio) ? listaFiltrada[0].bio = textoBio : listaFiltrada;
    } else {
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
function apagarItemLista(idLista: number, lista: Cientistas[]): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);

    if (listaFiltrada) {
        listaFiltrada[0].bio = '';
    } else {
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
function funcionalRetornarBio(idLista: number, lista: Cientistas[]): string {
    const listaFiltrada = consultarLista(idLista, lista);
    return listaFiltrada[0]?.bio || mensagemErro;
}

/**
 * Função responsável por retornar o nome de um item da lista.
 * @param idLista 'id' do item cujo 'nome' será retornado.
 * @param lista lista de itens onde a consulta foi realizada.
 * @returns retorna o 'nome' do objeto correspondente ao 'id', se existir. Caso contrário, retorna a mensagem de erro.
 */
function funcionalRetornarNome(idLista: number, lista: Cientistas[]): string {
    const listaFiltrada = consultarLista(idLista, lista);
    return listaFiltrada[0]?.name || mensagemErro;
}

/**
 * Função respnsável por alterar informações de um item da lista, identificado pelo 'id' passado por parÂmetro.
 * @param idLista 'id' do item a ser alterado.
 * @param lista lista de objetos onde a alteração será feita.
 * @param textoNome o novo texto para 'nome', se fornecido. Caso não seja, retorna o já existente.
 * @param textoBio o novo texto para 'bio', se fornecido. Caso não seja, retorna o já existente.
 * @returns retorna a lista alterada após as modificações
 */
function funcionalAlterarLista(idLista: number, lista: Cientistas[], textoNome?: string, textoBio?: string): Cientistas[] {
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
function funcionalApagarItemLista(idLista: number, lista: Cientistas[]): Cientistas[] {
    const listaFiltrada = consultarLista(idLista, lista);

    if (listaFiltrada) {
        return lista.filter(itemDeletar => itemDeletar.id !== idLista);
    } else {
        return lista;
    }
}

console.log("\n");
console.log("Bio - Funcional: ", funcionalRetornarBio(idLista, lista));
console.log("Nome - Funcional: ", funcionalRetornarNome(idLista, lista));
console.log("Alterar lista - Funcional: ", funcionalAlterarLista(idLista, lista, textoNome, textoBio));
console.log("Item deletado - Funcional: ", funcionalApagarItemLista(idLista, lista));