import { FETCH_DATA_ACTION } from './types';

import { API_KEY } from '../../App'

import {hash, ts} from '../../config/config';

export const fetchData = (name) => async dispatch => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/${name}?apikey=${API_KEY}&ts=${ts}&hash=${hash}`);
    const data = await response.json();
    const results = await data.data.results;

    dispatch({
        type: FETCH_DATA_ACTION,
        data: results
    });
}