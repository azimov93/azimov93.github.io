import { EDIT_MEETING, CREATE_MEETING, TOGGLE_FORM} from '../actions/actionsDate';

export const INITIAL_STATE = {
    isOpen: false,
    newEntry: false
};

export function form(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case TOGGLE_FORM:
            return Object.assign({}, state, {isOpen: !state.isOpen});
        case EDIT_MEETING:
            return Object.assign({}, state, {newEntry: false});
        case CREATE_MEETING:
            return Object.assign({}, state, {newEntry: true});
        default:
            return state;
    }
}