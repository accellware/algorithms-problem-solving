/**
 * 
 * @param list A comparable list of elements of T that has to be sorted
 * @returns a sorted list
 * 
 * @description 
 * Divide: Find the midpoint of the list and divide into sublists
 * Conquer: Recursively sort the sublists created in the previous step
 * Combine: merge the sorted sublists created in the previous step
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


const lst: Array<number> = [5,3,65,32,78,95,22,19,63,51,69,85,0,1,-1];
const sorted = mergeSort(lst);
console.log(`Before Sort: ${lst}\nSorted: ${sorted}`);