const devisor = (target) => {
    result = new Set();
    for (let i=0; i<Math.sqrt(target); i++) {
        if (target%i === 0) {
            result.add(i);
            if (target/i != 0) {
                result.add(target/i);
            };
        };
    };

    return [...result].sort((a,b) => a-b);
};

console.log(devisor(100));