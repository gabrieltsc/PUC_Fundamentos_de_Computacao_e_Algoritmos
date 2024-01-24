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

module.exports = { compareFn, swap };