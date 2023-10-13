'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n: number): void {
    for(let i = 0; i < n; i++)
    {
        let j = 0;
        for(; j < n - (i+1); j++)
        {
            process.stdout.write(' ');
        }
        
        for(; j < n; j++)
        {
            process.stdout.write('#');
        }
        
        process.stdout.write('\n');
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    staircase(n);
}
