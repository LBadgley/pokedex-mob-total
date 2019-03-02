import sortArray from '../src/sort-array.js';
const test = QUnit.test;
QUnit.module('sort array functionality');

test('sort by attack', assert => {
    // arrange
    const array = [
        { hp: 1, name: 'a' },
        { hp: 3, name: 'b' },
        { hp: 2, name: 'c' }
    ];
    const sortChoice = {
        property: 'hp'
    };
    const expected = [
        { hp: 3, name: 'b' },
        { hp: 2, name: 'c' },
        { hp: 1, name: 'a' }
    ];

    // act
    const result = sortArray(array, sortChoice);
    // assert
    assert.deepEqual(result, expected);
});