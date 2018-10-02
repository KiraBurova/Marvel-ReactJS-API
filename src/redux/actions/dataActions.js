import { FETCH_DATA_ACTION } from './types';
import { API_KEY } from '../../App'

export const fetchData = (name) => async dispatch => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/${name}?apikey=${API_KEY}`);
    const data = await response.json();
    const results = await data.results;

    console.log(response.json())
    

    // dispatch({
    //     type: FETCH_DATA_ACTION,
    //     data: results
    // });
}