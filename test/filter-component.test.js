const test = QUnit.test;

QUnit.module('filter creation');

function createOption(type) {
    const html = /*html*/`
        <option name="type" value="${type}">${type}</option>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('create option selector for type', assert => {
    // arrange
    const expected = /*html*/`
        <option name="type" value="grass">grass</option>
    `;
    const type = 'grass';

    // act
    const result = createOption(type);


    // assert
    assert.htmlEqual(result, expected);
});