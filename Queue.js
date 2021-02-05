class Queue {
    constructor() {
        this.items = new Array
    }

    enqueue = function(item) {
        this.items.push(item);
    }

    dequeue = function() {
        return this.items.pop();
    }

    isEmpty = function() {
        return this.items.length === 0;
    }

    toString = function() {
        return `[ ${this.items.join(', ')} ]`
    }

    get length() {
        return this.items.length;
    }

    get [Symbol.toStringTag]() {
        return 'Queue';
    }
}

module.exports = Queue;
