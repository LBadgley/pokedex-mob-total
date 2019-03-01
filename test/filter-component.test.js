import { createOption } from '../src/filter-component.js';

const test = QUnit.test;

QUnit.module('filter creation');

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