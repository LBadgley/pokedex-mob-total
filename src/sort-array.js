export default function sortArray(array, sortChoice) {
    const property = sortChoice.property;
    return array.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return -1;
        }
        return 1;
    });
}