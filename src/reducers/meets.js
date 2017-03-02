import { GET_MEETS, SET_MEETS, DELETE_MEETS, UPDATE_MEETS } from '../actions/actionsDate';
import { getMeets, saveMeets, deleteMeets, updateMeets } from '../actions/actions';

export default function meets(state = [], action = {}) {
    switch(action.type) {
        case GET_MEETS:
            return getMeets(action.data);
        case SET_MEETS:
            return saveMeets(action.data);
        case DELETE_MEETS:
            return deleteMeets(action.data);
        case UPDATE_MEETS:
            return updateMeets(action.data);
        default: return state;
    }
}