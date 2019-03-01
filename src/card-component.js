export function createCard(pokemon) {
    const html = /*html*/`
        <li style="background-color: ${pokemon.color_1};">
            ${pokemon.pokemon}
            <img src="${pokemon.url_image}" alt="image of ${pokemon.pokemon}">
            HP: ${pokemon.hp} A: ${pokemon.attack} D: ${pokemon.defense}
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const cardContainer = document.getElementById('card-container');

export default function loadCards(pokedex) {
    while(cardContainer.children.length > 0) {
        cardContainer.lastElementChild.remove();
    }
    pokedex.forEach(pokemon => {
        const dom = createCard(pokemon);
        cardContainer.appendChild(dom);
    });
}