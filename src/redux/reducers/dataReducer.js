import { FETCH_DATA_ACTION, FETCH_SINGLE_ITEM_ACTION } from '../actions/types';

const initialState = {
    data: [],
    item: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                data: state.data.concat(action.data)
            }
            case FETCH_SINGLE_ITEM_ACTION:
            return {
                ...state,
                item: action.data
            }
        default:
            return state;
    }
}