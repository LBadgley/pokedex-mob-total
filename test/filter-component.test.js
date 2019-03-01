const test = QUnit.test;

QUnit.module('filter creation');

function createOption() {
    return /*html*/`
        <option name="type" value="grass">grass</option>
    `;
}

test('create option selector for type', assert => {
    // arrange
    const expected = /*html*/`
        <option name="type" value="grass">grass</option>
    `;
    // act
    const result = createOption();
    // assert
    assert.equal(result, expected);
});