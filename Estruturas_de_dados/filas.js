console.log('[Fila/Queue]')
// Qualquer tipo de dado
// Uma atrás da outra, ordem importa
// Quem entra primeiro, sai primeiro (FIFO)
var fila = [
    'Primeiro item',
    'Segundo item',
    'Terceiro item'
];

console.log('Itens iniciais: ' + fila);

// Adiciona um item ao fim da fila - Enqueue
fila.push('Quarto item');
console.log('Após adição de um item ao fim:  ' + fila);

// Retira o item do início da fila - Dequeue
fila.shift();
console.log('Após retirada de um item do início:  ' + fila);

// Receita da criação de filas (Estrutura de classes)
class Queue {
    constructor() {
        this.data = [];
    }
    
    print() {
        console.log('Fila: ' + this.data);
    }
    enqueue(item) {
        this.data.push(item);
    };
    dequeue() {
        this.data.shift();
    };
};

var requests = new Queue();

// Princípio Open Closed
// Aberto para extensão
requests.print();
requests.enqueue('scripts.js');
requests.enqueue('style.css');
requests.enqueue('image.png');
requests.enqueue('doguinho.png');
requests.print();

// Fechado para alteração
requests.dequeue();
requests.print();
requests.dequeue();
requests.print();
requests.dequeue();
requests.print();
requests.dequeue();
requests.print();
