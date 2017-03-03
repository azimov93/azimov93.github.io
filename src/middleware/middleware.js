import { GET_ALL_MEETINGS, UPDATE_MEETING, CREATE_MEETING, DELETE_MEETING } from '../actions/actionsDate';

export const persistData = store => next => action => {

    let localState = localStorage.getItem('calendarApp');

    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    else {
        let all = action.payload;
        let meetingState = { all: all};
        localState = Object.assign({}, {meetings: meetingState});
    }

    let result;
    let newAction;

    switch(action.type) {
        case GET_ALL_MEETINGS:
            newAction = {type: action.type};
            newAction.payload = localState;
            localStorage.setItem('calendarApp', JSON.stringify(localState));
            result = next(newAction);
            return result;
        case CREATE_MEETING:
            localState.meetings.all.push(action.payload);
            localStorage.setItem('calendarApp', JSON.stringify(localState));
        case DELETE_MEETING:
            localState.meetings.all = localState.meetings.all.filter((meeting, index) => {
                return (index + 1) !== action.payload;
            });
            localStorage.setItem('calendarApp', JSON.stringify(localState));
        case UPDATE_MEETING:
            localState.meetings.all = localState.meetings.all.map((meeting, index) => {
                if (index + 1 === action.payload.id) {
                    return action.payload;
                }
                return meeting;
            });
            localStorage.setItem('calendarApp', JSON.stringify(localState));
        default:
            result = next(action);
            return result;
    }
}