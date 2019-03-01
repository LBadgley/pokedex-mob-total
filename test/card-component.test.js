const test = QUnit.test;

QUnit.module('card creation');

function createCard() {
    const html = /*html*/`
        <li style="background-color: #78C850;">
            bulbasaur
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="image of bulbasaur">
            HP: 45 A: 49 D: 49
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('create card dom', assert => {
    // arange
    const expected = /*html*/`
        <li style="background-color: #78C850;">
            bulbasaur
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="image of bulbasaur">
            HP: 45 A: 49 D: 49
        </li>
    `;
    // act
    const result = createCard();
    // assert
    assert.htmlEqual(result, expected);
});