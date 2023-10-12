import { consultarLista } from "../request/request-service";

let idLista = 2; // --> a variável pode receber valor via parâmetro ou via input
let resultadoFiltrado: any;

// ------------------------------- Paradigma imperativo --------------------------------

/**
* Função responsável por retornar a biografia de um item da lista baseado no ID passado
* @returns a biografia (bio) do item correspondente, ou uma mensagem caso o objeto não seja encontrado
*/
function retornarBio(): string {
    // Consulta a lista completa usando o id passado e armazena o resultado em 'resultado'
    resultadoFiltrado = consultarLista(idLista);
    // Verifica se o elemento procurado existe na lista
    return (resultadoFiltrado.length > 0) ? resultadoFiltrado[0].bio : "Objeto não encontrado."
}

/**
* Função responsável por retornar o nome de um item da lista baseado no ID passado
* @returns o nome (name) do item correspondente, ou uma mensagem caso o objeto não seja encontrado
*/
function retornarName(): string {
    return (resultadoFiltrado.length > 0) ? resultadoFiltrado[0].name : "Objeto não encontrado";
}

/**
 * Função responsável por alterar um item da lista baseado no ID passado
 * @returns o array original após a alteração dos atributos "bio" e "name
 */
function alterarLista(): Array<any> {
    resultadoFiltrado[0].bio = "Teste bio";
    resultadoFiltrado[0].name = "Teste name";

    return resultadoFiltrado;
}

/**
* Função responsável por remover um item da lista baseado no ID passado
* @returns o array original após a remoção do item desejado
*/
function apagarItemLista(): Array<any> {
    delete resultadoFiltrado[0].bio;
    return resultadoFiltrado;
}

console.log("Bio - Imperativo: ", retornarBio());
console.log("Nome - Imperativo: ", retornarName());
console.log("Lista alterada - Imperativo: ", alterarLista());
console.log("Item deletado -  Imperativo: ", apagarItemLista());

// ------------------------------- Paradigma funcional --------------------------------

/**
 * Retorna a propriedade 'bio' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @returns string com o valor da propriedade 'bio'
 */
function funcionalRetornarBio(idLista: number): string {
    const listaFiltrada = consultarLista(idLista);
    const filtrarObjeto = listaFiltrada.find(objeto => objeto.id === idLista);

    return filtrarObjeto ? filtrarObjeto.bio : "Objeto não encontrado."
}

/**
 * Retorna a propriedade 'name' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @returns string com o valor da propriedade 'name'
 */
function funcionalRetornarName(idLista: number): string {
    const listaFiltrada = consultarLista(idLista);
    const filtrarObjeto = listaFiltrada.find(objeto => objeto.id === idLista);

    return filtrarObjeto ? filtrarObjeto.name : "Objeto não encontrado.";
}

/**
 * Altera a propriedade 'bio' de um objeto filtrado por ID
 * @param idLista id passado por parâmetro
 * @param texto o novo valor fornecido pelo usuário e atribuído à propriedade
 * @returns string retornando o novo valor
 */
function funcionalAlterarLista(idLista: number, texto: string) {
    const listaAlterar = consultarLista(idLista);

    const listaAtualizada = listaAlterar.map(objeto => {
        if (objeto.id === idLista) {
            return objeto.bio = texto;
        }
        return objeto;
    })

    return listaAtualizada;
}

/**
 * Remove a propriedade 'name' do objeto baseado no ID fornecido.
 * @param idLista id passado por parâmetro
 * @returns propriedade removida
 */
function funcionalApagarItemLista(idLista: number): string {
    const listaOriginal = consultarLista(idLista);
    const listaApagar = listaOriginal.find(objeto => objeto.id === idLista);

    if (listaApagar) {
        const listaAtualizada = consultarLista(idLista).filter(itemDeletar => itemDeletar.id !== idLista);
        return listaApagar.name;
    } else {
        return "Objeto não encontrado.";
    }
}

console.log("\n");
console.log("Bio - Funcional: ", funcionalRetornarBio(4));
console.log("Nome - Funcional: ", funcionalRetornarName(3));
console.log("Alterar lista - Funcional: ", funcionalAlterarLista(2, "Nova bio"));
console.log("Item deletado - Funcional: ", funcionalApagarItemLista(1));