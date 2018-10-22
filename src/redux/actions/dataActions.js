import { FETCH_DATA_ACTION, FETCH_SINGLE_ITEM_ACTION, FETCH_SEARCHED_DATA_ACTION } from './types';

import { API_KEY } from '../../App'

import { hash, ts } from '../../config/config';

export const fetchData = (name, origOptions) => async dispatch => {
    const defaultOptions = { page: 0, count: 20 }
    const options = Object.assign(defaultOptions, origOptions)

    const currentOffset = options.page === undefined ? 0 : (options.count * (options.page - 1));

    const response = await fetch(`https://gateway.marvel.com/v1/public/${name}?apikey=${API_KEY}&ts=${ts}&hash=${hash}&offset=${currentOffset}`);
    const data = await response.json();
    const results = await data.data.results;
    const totalPages = await data.data.total;

    Object.assign(options, {totalPages})

    dispatch({
        type: FETCH_DATA_ACTION,
        data: results,
        options
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

export const fetchSearchedData = (type, name) => async dispatch => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/${type}?name=${name}&apikey=${API_KEY}&ts=${ts}&hash=${hash}`);
    const data = await response.json();
    const results = await data.data.results[0];

    dispatch({
        type: FETCH_SEARCHED_DATA_ACTION,
        data: results
    });
}