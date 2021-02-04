class Graph {
    constructor(numEdges) {
        this.edgeList = new Map();
    }
    addVertex = function (v) {
        this.edgeList.set(v, []);
    }

    addEdge = function([v, w]) {
        this.edgeList.get(v).push(w);
        this.edgeList.get(w).push(v);
    }

    vertCount = function() { return this.edgeList.entries().length; };
}

module.exports = Graph;
