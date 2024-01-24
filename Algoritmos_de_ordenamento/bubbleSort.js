function compareFn(array1, array2){
    if (array1 > array2) {
        return true;
    }
    else {
        return false;
    }
}

function swap(lista, indiceItemMaior, indiceItemMenor) {
    let temp = lista[indiceItemMaior];
    lista[indiceItemMaior] = lista[indiceItemMenor];
    lista[indiceItemMenor] = temp;
}

function bubbleSort(array){
    const { length } = array;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (compareFn(array[j], array[j + 1])) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

let lista = [3, 6, 5, 8, 10, 9, 1, 4, 2, 7];
bubbleSort(lista);

console.log(lista);
