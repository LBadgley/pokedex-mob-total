import filterArray from '../src/filter-array.js';

const test = QUnit.test;

QUnit.module('filter array');

test('filter an array based on blue', assert => {
    // arrange
    const array = [
        { type_1: 'blue', id: 1 },
        { type_1: 'green', id: 2 },
        { type_1: 'blue', id: 2 }
    ];
    
    const filterOptions = {
        type_1: 'blue'
    };

    const expected = [
        { type_1: 'blue', id: 1 },
        { type_1: 'blue', id: 2 }        
    ];

    // act
    const result = filterArray(array, filterOptions);

    // assert
    assert.deepEqual(result, expected);
});

test('return all items if no selection', assert => {
    // arrange
    const array = [
        { type_1: 'blue', id: 1 },
        { type_1: 'green', id: 2 },
        { type_1: 'blue', id: 2 }
    ];
    
    const filterOptions = {
        type_1: ''
    };

    const expected = [
        { type_1: 'blue', id: 1 },
        { type_1: 'green', id: 2 },
        { type_1: 'blue', id: 2 }      
    ];

    // act
    const result = filterArray(array, filterOptions);

    // assert
    assert.deepEqual(result, expected);
});