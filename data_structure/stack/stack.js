const Stack = () => {
    let store = [];
    let top = 0;

    return{
        push(item) {
            store.push(item);
            top++;
        },
        pop() {
            store.pop();
            top--;
        },
        peek() {
            return store[top-1];
        },
        clear() {
            store.splice(0);
            top = 0;
        },
        length() {
            return top;
        }
    };
};

/* 사용법

let s = Stack();
s.push(1);
s.peek();
...

*/