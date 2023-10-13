const linearSearch = (element, list) => {
    for(var i = 0; i < list.length; i++)
    {
        if(list[i] == element)
        {
            return i;
        }
    }

    return -1;
}

const find = (element) => {
    let result = linearSearch(element, [1,2,3,4,5,6,7,8,9,10]);

    if(result == -1)
    {
        console.log(element + ' Not found');
    }else{
        console.log(element + ' Found at index: ' + result);
    }
}

find(12);
find(6);