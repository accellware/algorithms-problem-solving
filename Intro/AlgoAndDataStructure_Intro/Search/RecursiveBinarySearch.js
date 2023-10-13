const setValues = (length, start, end) => {
    if(isNaN(start))
    {
        start = 0;
    }

    if(isNaN(end))
    {
        end = length;
    }

    return [start, end];
}

const recursiveBinarySearch = (search, elems, start, end) => {
    const tuple = setValues(elems.length, start, end);
    start = tuple[0];
    end = tuple[1];

    if (start == end)
    {
        return -1;
    }

    const mid = Math.floor((end + start) / 2);

    if (elems[mid] == search)
    {
        return mid;
    }

    if (elems[mid] > search)
    {
        return recursiveBinarySearch(search, elems, start, mid - 1);
    } else {
        return recursiveBinarySearch(search, elems, mid + 1, end);
    }
}

const find = (element) => {
    let result = recursiveBinarySearch(element, [1,2,3,4,5,6,7,8,9,10]);

    if (result == -1)
    {
        console.log(element + ' Not found');
    } else {
        console.log(element + ' Found at index: ' + result);
    }
}

find(12);
find(6);
find(3);
find(7);
find(10);