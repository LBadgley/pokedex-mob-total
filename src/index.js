import pokedex from '../data/pokedex.js';
import loadCards from './card-component.js';
import loadFilterOptions, { types } from './filter-component.js';

loadFilterOptions(types, selected => {
    console.log(selected);
});
loadCards(pokedex);