'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bfs function below.
function bfs(n, m, edges, s) {
    const graph = new Array(n).fill({neighbors:[]});
    const edgeLength = 6;
    for (let i=1; i<m+1; i++) {
        let edge = edges[i];
        graph[i] =
        console.log(edge);
    }
    // console.log(graph);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = bfs(n, m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
