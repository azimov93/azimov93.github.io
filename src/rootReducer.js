import { combineReducers } from 'redux';

import { meetings, form } from './reducers/meetings';

export default combineReducers({
    meetings,
    form
})