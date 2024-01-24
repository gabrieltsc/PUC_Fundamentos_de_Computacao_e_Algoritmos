//import { compareFn } from './compara_e_troca.js';
//import { swap } from './compara_e_troca.js';
const funcao = require("./compara_e_troca.js");

function bubbleSort(array){
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (funcao.compareFn(array[j], array[j + 1])) {
                funcao.swap(array, j, j + 1);
            }
        }
    }
    return array;
}

let lista = [3, 6, 5, 8, 10, 9, 1, 4, 2, 7];
bubbleSort(lista);

console.log(lista);
