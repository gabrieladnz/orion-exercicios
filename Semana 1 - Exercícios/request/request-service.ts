/**
 * Armazenei o array dentro da const lista e exportei a função para ser chamada em outros componentes sempre que precisar ser utilizada.
 * @param id o id é o parâmetro necessário que a função recebe para retornar os dados da lista
 */
export function consultarLista(id: number, lista: any[]) {
    const resultado = lista.filter(objeto => objeto.id === id);
    return resultado;
}