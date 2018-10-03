import { FETCH_DATA_ACTION, FETCH_SINGLE_ITEM_ACTION } from './types';

import { API_KEY } from '../../App'

import { hash, ts } from '../../config/config';

export const fetchData = (name) => async dispatch => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/${name}?apikey=${API_KEY}&ts=${ts}&hash=${hash}`);
    const data = await response.json();
    const results = await data.data.results;

    dispatch({
        type: FETCH_DATA_ACTION,
        data: results
    });
}

export const fetchSingleItem = (name, id) => async dispatch => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/${name}/${id}?apikey=${API_KEY}&ts=${ts}&hash=${hash}`);
    const data = await response.json();
    const results = await data.data.results[0];

    dispatch({
        type: FETCH_SINGLE_ITEM_ACTION,
        data: results
    });
}