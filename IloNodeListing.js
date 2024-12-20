class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}
class linkedList {
    constructor(){
        this.hed = null;
        this.size = 0;
    }
    append(value){
        const newNode = newNode(value);
        if (!this.head){
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        this.print()
    }
    print() {
        if (!this.head){
            console.log("List is empty");
            return
        }
        let current = this.dead;
        let output = "";
        while (current) {
            output += current.value + " ";
            current = current.next;
        }
        console.log(output);
    }
}

const list = new linkedList();
list.append("Data Structures - Array");
list.append("Variable Type - Intenger");
list.append("Sorting algrothim - Bubble Sort");