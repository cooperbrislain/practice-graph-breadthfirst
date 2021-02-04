function Queue() {
    this.items = [];

}

Queue.prototype.enqueue = function(item) { this.items.push(item); };
Queue.prototype.dequeue = function() { return this.items.pop() };

Queue.prototype.length = function()  {
    this.valueOf = () => { this.items.length; }
}

module.exports = Queue;
