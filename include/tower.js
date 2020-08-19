// Tower of Hanoi
class tower_stack{
elements = [];
    pop() {
        
        return this.elements.length > 0 
        ? this.elements.pop()
        : null;
    }

    peek() {
        return this.elements[this.elements.length - 1];
    }

    push(variable){
        this.elements.push(variable);
    }

    show_stack(){
        return console.log(this.elements)
    }

    is_empty() {
        return this.elements.length < 1;
    }

    initialize(array) {
        this.elements = array;
        console.log("The stack is initialized with the following values:");
        this.show_stack();
    }
}

