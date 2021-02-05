let Graph = require('./Graph');
let Queue = require('./Queue');

const makeGraph = (n, m, edges) => {
    let g = new Graph(n);

    for (let i=1; i<=n; i++) { // 1 to n
        g.addVertex(i);
    }

    for (let i=0; i<m; i++) {
        g.addEdge(edges[i]);
    }
    return g;
}

// Complete the bfs function below.
const bfs = (n, m, edges, v0) => {
    const g = makeGraph(n, m, edges); // first make the graph

    const q = new Queue();    // queue for the bfs
    const d = { };            // distances

    const edgeLen = 6;        // for the purposes of this exercise,
                              // all edge weights are 6
    let v = v0;               // current vertex

    Array.from(g.edgeList.keys()).forEach(k => d[k] = -1);

    // meat starts here

    q.enqueue(v0);
    d[v0] = 0;

    while (!q.isEmpty()) {
        console.log(`[ QUEUE: ${q.items.join(' ')} ]`);
        let v = q.dequeue();
        console.log(`visiting ${v}`);
        let adjacent = g.edgeList.get(v);
        console.log(`\tAdjacent nodes: ${adjacent.join(',')}`);
        for (const w of adjacent) {
            if (d[w] === -1) {
                d[w] = d[v]+1;
                q.enqueue(w);
                console.log(`\t\tAdded ${w} to queue`);
            } else {
                console.log(`\t\tAlready been to ${w}, skipping`);
            }
        }
    }

    return d;
};

module.exports = bfs;
