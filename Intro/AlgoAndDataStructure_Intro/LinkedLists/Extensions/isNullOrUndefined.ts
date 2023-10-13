export const isNullOrUndefined = (value: any) => {
    if(value == null)
    {
        return true;
    }

    if(value === null)
    {
        return true;
    }

    if(typeof value === 'undefined')
    {
        return true;
    }

    return false;
}