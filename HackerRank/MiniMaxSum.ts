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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

export const mergeSort = <T>(list: Array<T>): Array<T> => {
    if(list.length <= 1)
    {
        return list;
    }

    let splitted: [Array<T>, Array<T>] = split(list);

    let left = mergeSort(splitted[0]);
    let right = mergeSort(splitted[1]);

    return merge(left, right);
}

function split<T>(list: T[]): [Array<T>,Array<T>] {
    const midPoint = Math.floor(list.length / 2);

    return [list.slice(0, midPoint), list.slice(midPoint)];
}

function merge<T>(left: T[], right: T[]): T[] {
    const lst: Array<T> = [];
    let i:number = 0;
    let j:number = 0;

    while(i < left.length && j < right.length)
    {
        if(left[i] < right[j])
        {
            lst.push(left[i]);
            i++;
        }else{
            lst.push(right[j]);
            j++;
        }
    }

    while(i < left.length)
    {
        lst.push(left[i]);
        i++;
    }

    while(j < right.length)
    {
        lst.push(right[j]);
        j++;
    }

    return lst;
}

function miniMaxSum(arr: number[]): void {
    let sorted = mergeSort(arr);
    
    let minSum = sorted.slice(0, 4).reduce((prev, current) => prev + current);
    let maxSum = sorted.slice(arr.length - 4).reduce((prev, current) => prev + current);
    
    process.stdout.write(`${minSum} ${maxSum}`);
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
