export default function filterArray(array, filterOptions) {
    return array.filter(item => {
        const hasType = !filterOptions.type || filterOptions.type === item.type;

        return hasType;
    });
}