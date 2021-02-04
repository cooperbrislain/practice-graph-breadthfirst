const dfs = (v0) => {
    let visited = { };

    this.dfsRecursive(v0, visited);
}

const dfsRecursive = (v, visited) => {
    visited[v] = true;
    console.log(v);

    let adj = this.edgeList.get(v);

    for (let i of adj) {
        let w = adj[i];
        if (!visited[w]) {
            dfsRecursive(w, visited);
        }
    }
}
