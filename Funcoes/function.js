function integrador(limite) {
    for (let i = 0; i < limite; i++) {
        if (i%2 == 1) {
            console.log(i + " é um número ímpar.")
        } else {
            console.log(i + " é um número par.")
        }
    }
}

integrador(20);