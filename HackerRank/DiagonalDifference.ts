'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function getDiagonalSum(arr: number[][]): number {
    let sum: number = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i][i];
    }
    
    return sum;
}

function getInvertedDiagonalSum(arr: number[][]): number {
    let sum: number = 0;
    for(let i = arr.length - 1, j = 0; i >= 0; i--, j++)
    {
        sum += arr[i][j];
    }
    
    return sum;
}

function diagonalDifference(arr: number[][]): number {
    const sum: number = getDiagonalSum(arr);
    const inversedSum: number = getInvertedDiagonalSum(arr);
    
    return Math.abs(sum - inversedSum);
}


function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
