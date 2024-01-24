// LIFO - Stack
// Retira o último inserido. A ordem importa.
console.log('Pilha/Stack');

class BrowserHistoryStack {
    constructor() {
        this.cursor = 0;
        this.data = [];
    }

    push(item) {
        this.cursor += 1;
        this.data.push(item);
    }

    back() {
        this.cursor -= 1;
        this.data.pop();
    }

    clear() {
        this.data = [];
    }

    print() {
        console.log('Cursor', this.cursor);
        console.log('Itens atuais', this.data);
    }
};

const history = new BrowserHistoryStack();
history.push('https://google.com');
history.push('https://youtube.com');
history.push('https://facebook.com');
history.print();
history.back();
history.print();