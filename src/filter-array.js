export default function filterArray(array, filterOptions) {
    return array.filter(item => {
        const hasType = !filterOptions.type_1 || filterOptions.type_1 === item.type_1;

        return hasType;
    });
}