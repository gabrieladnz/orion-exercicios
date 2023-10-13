import { Cientistas } from "../exercicio/exercicio-2";

/**
 * Filtra uma lista de objetos com base no 'id' fornecido.
 * @param id 'id' usado para filtrar a lista.
 * @param lista a lista de objetos a ser filtrada.
 * @returns um array de objetos da lista original que têm o 'id' correspondente.
 */
export function consultarLista(id: number, lista: Cientistas[]): Cientistas[] {
    return lista.filter(objeto => objeto.id === id);
}