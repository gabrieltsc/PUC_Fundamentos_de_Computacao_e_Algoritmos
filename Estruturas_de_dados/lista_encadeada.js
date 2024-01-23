/* Um nó da lista encadeada guarda o conteúdo do nó (element) 
e o apontamento para o próximo*/
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.count = 0; // Contador de nós
        this.header = null;// Primeiro
        this.tail = null; // Último
    }

    add(element){
        if (this.count == 0){
            this.tail = element;
            this.header = this.tail;
        } 
        else {
            this.tail.next = element;
            this.tail = element;
        }
        this.count++;
    }

    print(){
        var aux = this.header;
        while(aux != null){
            console.log(aux.element);
            aux = aux.next;
        }
        console.log("\n");
    }
}

var listaEncadeada = new LinkedList();

for (var i = 1; i <= 4; i++) {
    listaEncadeada.add(new Node(i));
    listaEncadeada.print();
}