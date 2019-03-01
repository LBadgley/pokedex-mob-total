import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadFilterOptions, { types } from './filter-component.js';
import filterArray from './filter-array.js';

loadCards(pokedex);

loadFilterOptions(types, selected => {
    const filteredArray = filterArray(pokedex, selected);
    loadCards(filteredArray);
});