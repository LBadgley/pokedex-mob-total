import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadFilterOptions, { types } from './filter-component.js';
import filterArray from './filter-array.js';
import loadSort from './sort-component.js';
import sortArray from './sort-array.js';

loadCards(pokedex);

loadSort(sortSelect => {
    const sortedArray = sortArray(pokedex, sortSelect);
    loadCards(sortedArray);
});

loadFilterOptions(types, selected => {
    const filteredArray = filterArray(pokedex, selected);
    loadCards(filteredArray);
});
