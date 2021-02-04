let Graph = require('./Graph');
let Queue = require('./Queue');

// Complete the bfs function below.
const bfs = (n, m, edges, v0) => {
    let ret = [];
    let v = v0;
    let q = new Queue();
    let g = new Graph(n);
    let visited = {};

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
    while (!q.isEmpty) {
        let v = q.dequeue();
        console.log(v);
        let adj = g.edgeList.get(v);
        for (const w of adj) {
            if (!visited[w]) {
                visited[w] = true;
                q.enqueue(w);
            }
        }
    }


    visited[v] = true;
    q.enqueue(v);
    while (q.length) {
        console.log(q.length());
        v = q.dequeue();
        visited[v] = true;
        console.log(`edges of ${v}`, g.edgeList.get(v));
        for (const w of g.edgeList.get(v)) {
            if (!visited[w]) {
                q.enqueue(w);
            }
        }
    }

    return g.edgeList.values();
};

module.exports = bfs;
