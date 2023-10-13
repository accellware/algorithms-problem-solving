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

function getPrintableRatio(sum: number, total: number): string {
    return (sum / total).toFixed(6);
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let positives: number = 0,
        negatives: number = 0,
        zeroes: number = 0;
        
    arr.forEach(x => {
        if(x > 0)
        {
            positives++;
        }else if(x < 0) {
            negatives++;
        } else {
            zeroes++;
        }
    });
    
    process.stdout.write(`${getPrintableRatio(positives, arr.length)}\n`);
    process.stdout.write(`${getPrintableRatio(negatives, arr.length)}\n`);
    process.stdout.write(`${getPrintableRatio(zeroes, arr.length)}\n`);
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
