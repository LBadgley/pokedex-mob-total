export function createOption(type) {
    const html = /*html*/`
        <option name="type" value="${type}">${type}</option>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export const types = [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy'
];

const typeChoice = document.getElementById('type-choice');

export default function loadFilterOptions(types, callback) {

    types.forEach(type => {
        const dom = createOption(type);
        typeChoice.appendChild(dom);
    });

    typeChoice.addEventListener('change', () => {
        const selected = {
            type_1: typeChoice.value
        };
        callback(selected);
    });
}
