const Deque = () => {
    let store = [];
    
    return {
        // push
        push_head(item) {
            store = [item, ...store];
        },
        push_tail(item) {
            store.push(item);
        },
        // pop
        pop_head() {
            store.shift();
        },
        pop_tail() {
            store.pop();
        },
        // print
        print_head() {
            return store[0];
        },
        print_tail() {
            return store[store.length - 1];
        },
        // rotate
        rotate_left(n) {
            if (!this.isEmpty()) {
                let temp = null;
                for (let i=0; i<n; i++) {
                    temp = store[0];
                    store.shift();
                    store.push(temp);
                }
            } else {
                console.log("deque is Empty");
            }
        },
        rotate_right(n) {
            if (!this.isEmpty()) {
                let temp = null;
                for (let i=0; i<n; i++) {
                    temp = store[store.length - 1];
                    store.pop();
                    store = [temp, ...store]
                }
            } else {
                console.log("deque is Empty");
            }
        },
        // else
        isEmpty() {
            return store.length === 0 ? true : false;
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

const d = Deque();
d.push_head(2);
d.push_tail(1);
d.rotate_left(1);
...

*/