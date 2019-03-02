const sortChoice = document.getElementById('sort-choice');

export default function loadSort() {
    sortChoice.addEventListener('change', () => {
        const sortSelect = {
            property: sortChoice.value
        };
        console.log(sortSelect);
    });
}