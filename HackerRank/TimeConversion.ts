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

function writeLine(str: string): void {
    process.stdout.write(`${str}\n`);
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function splitStringTime(s: string): [number, number, number, string] {
    const timeFraction = s.substr(0, 8).split(':');
    
    const amPM = s.substr(8);
    const hours = parseInt(timeFraction[0]);
    const minutes = parseInt(timeFraction[1]);
    const seconds = parseInt(timeFraction[2]);
    
    return [hours, minutes, seconds, amPM];
}

function getConvertedHours(hours: number, amPM: string)
{
    let convertedHours = hours;
    if(amPM == 'AM' && convertedHours == 12)
    {
        convertedHours = 0;
    }
    
    if(amPM == 'PM' && convertedHours != 12)
    {
        convertedHours += 12;
    }
    
    return convertedHours;
}

function addLeadingZero(num: number): string {
    return String(num).padStart(2, '0');
}

function timeConversion(s: string): string {
    const [hours, minutes, seconds, amPM] = splitStringTime(s);
    
    let convertedHours = getConvertedHours(hours, amPM);
    
    return `${addLeadingZero(convertedHours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
