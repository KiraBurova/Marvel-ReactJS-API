import { FETCH_DATA_ACTION, FETCH_SINGLE_ITEM_ACTION, FETCH_SEARCHED_DATA_ACTION, FETCH_ADDITIONAL_INFO_ACTION } from '../actions/types';

const initialState = {
    data: [],
    item: null,
    additional: null,
    options: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                data: action.data,
                options: action.options
            }
        case FETCH_SINGLE_ITEM_ACTION:
            return {
                ...state,
                item: action.data
            }
        case FETCH_SEARCHED_DATA_ACTION:
            return {
                ...state,
                data: state.data.filter((item) => item.id === action.data.id)
            }
        case FETCH_ADDITIONAL_INFO_ACTION:
        return {
            ...state,
            additional: action.data
        }
        default:
            return state;
    }
}