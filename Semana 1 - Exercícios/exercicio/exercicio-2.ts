import { consultarLista } from "../request/request-service";

//  2 - Dado o array:
let idLista = 3; // --> a variável pode receber valor via parâmetro ou via input
let resultadoFiltrado;

// a) Crie uma função que retorne a bio do id passado
function retornarBio() {
    // Consulta a lista completa usando o id passado e armazena o resultado em 'resultado'
    const resultado = consultarLista(idLista);
    // Filtra os elementos da lista pelo idLista e armazena o resultado em 'resultadoFiltrado'
    resultadoFiltrado = resultado.filter(item => item.id === idLista);
    // Acessa a bio e imprime seu valor
    console.log("Bio: ", resultadoFiltrado[0].bio);
}

// b) Crie uma função que retorne o name do id passado
function retornarName() {
    console.log("Name:", resultadoFiltrado[0].name);
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function apagarItemLista() {
    delete resultadoFiltrado[0].bio;
    console.log("Item deletado: ", resultadoFiltrado)
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function alterarLista() {
    resultadoFiltrado[0].bio = "Teste bio";
    resultadoFiltrado[0].name = "Teste name";
    console.log("Lista alterada: ", resultadoFiltrado);
}

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
retornarBio(); // --> Paradigma funcional: não modifica o estado do objeto principal (resultado), apenas filtra e retorna um valor através do ID
retornarName(); //  --> Paradigma funcional: não modifica o estado do objeto, apenas retorna o valor 'name'
apagarItemLista(); // --> Paradigma imperativo: modifica o estado do objeto ao deletar uma propriedade do objeto
alterarLista(); // --> Paradigma imperativo: modifica o estado do objeto ao alterar o valor das propriedades 'bio' e 'name'