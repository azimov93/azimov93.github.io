import { combineReducers } from 'redux';

import { meetings } from './reducers/meetings';
import { form } from './reducers/form';

export default combineReducers({
    meetings: meetings,
    form: form
})