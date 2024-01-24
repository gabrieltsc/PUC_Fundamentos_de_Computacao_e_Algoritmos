function fatorial(number) {
    if (number < 0) {
        return undefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--) {
        total = total * n;
    }
    return total;
}

function fatorialRecursivo(n) {
    if (n == 1 || n == 0){
        return 1;
    }
    return n * fatorialRecursivo(n - 1);
}

console.log(fatorial(5)); // 120
console.log(fatorialRecursivo(5));
