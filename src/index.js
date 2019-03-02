import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadFilterOptions, { types } from './filter-component.js';
import filterArray from './filter-array.js';
import loadSort from './sort-component.js';

loadCards(pokedex);

loadSort(sortSelect => {
    console.log(sortSelect);
});

loadFilterOptions(types, selected => {
    const filteredArray = filterArray(pokedex, selected);
    loadCards(filteredArray);
});