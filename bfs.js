// Complete the bfs function below.
module.exports = (n, m, edges, s) => {
    const visited = new Array(n);
    const graph = visited.map(node => []);
    console.log('Graph');
    for (let i=1; i<m+1; i++) {
        let edge = edges[i];
        console.log(edge);
    }
    // console.log(graph);
};
