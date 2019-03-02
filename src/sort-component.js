const sortChoice = document.getElementById('sort-choice');

export default function loadSort(callback) {
    sortChoice.addEventListener('change', () => {
        const sortSelect = {
            property: sortChoice.value
        };
        callback(sortSelect);
    });
}