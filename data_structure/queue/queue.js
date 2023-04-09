const Queue = () => {
    let store = [];

    return {
        enqueue(item) {
            store.push(item);
        },
        dequeue() {
            store.shift();
        },
        peek() {
            return store[0];
        },
        clear() {
            store.splice(0);
        },
        length() {
            return store.length;
        }
    };
};

/* 사용법

let q = Queue();
q.enqueue(1);
q.dequeue();
...

*/