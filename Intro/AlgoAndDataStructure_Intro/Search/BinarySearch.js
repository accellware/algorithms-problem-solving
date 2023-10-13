const binarySearch = (searchElem, list) => {
    let lowerBound = 0;
    let upperBound = list.length - 1;

    while(true)
    {
        let middlePoint = Math.floor((upperBound + lowerBound) / 2);
        if(upperBound == lowerBound)
        {
            return -1;
        }

        const midValue = list[middlePoint];

        if (midValue == searchElem)
        {
            return middlePoint;
        }

        if(midValue > searchElem)
        {
            upperBound = middlePoint - 1;
        } else {
            lowerBound = middlePoint + 1;
        }
    }
}

const find = (element) => {
    let result = binarySearch(element, [1,2,3,4,5,6,7,8,9,10]);

    if(result == -1)
    {
        console.log(element + ' Not found');
    }else{
        console.log(element + ' Found at index: ' + result);
    }
}

find(12);
find(6);
find(3);
find(7);
find(10);