const toArray = (value) => {
    if (!Array.isArray(value)) {
        value = [value];
    }
    return value;
}

export default toArray;
