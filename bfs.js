let Graph = require('./Graph');
let Queue = require('./Queue');

// Complete the bfs function below.
const bfs = (n, m, edges, v0) => {
    let v = v0;
    let q = new Queue();
    let g = new Graph(n);
    let visited = {};
    let d = []
    // populate the graph

    for (let i=1; i<=n; i++) { // 1 to n
        g.addVertex(i);
        visited[i] = false;
    }

    for (let i=0; i<m; i++) {
        g.addEdge(edges[i]);
    }

    // meat starts here

    visited[v0] = true;
    q.enqueue(v0);
    while (!q.isEmpty() && (console.log('QUEUE: ', q.items) || 1)) {
        let v = q.dequeue();
        let adjacent = g.edgeList.get(v);
        console.log(`visiting ${v}... adjacent vertices: ${adjacent.join(', ')}`);
        for (const w of adjacent) {
            if (!visited[w]) {
                visited[w] = true;
                q.enqueue(w);
            }
        }
    }

    return d;
};

module.exports = bfs;
