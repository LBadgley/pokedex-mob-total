const test = QUnit.test;
QUnit.module('sort array functionality');

function sortArray(array, sortChoice) {
    const property = sortChoice.property;
    return array.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return -1;
        }
        return 1;
    });

}

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