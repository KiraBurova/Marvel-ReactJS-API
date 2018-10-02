import { FETCH_DATA_ACTION } from '../actions/types';

const initialState = {
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                data: state.data.concat(action.data)
            }
        default:
            return state;
    }
}