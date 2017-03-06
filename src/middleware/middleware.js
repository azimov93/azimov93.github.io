import { GET_ALL_MEETINGS, UPDATE_MEETING, SAVE_NEW_MEETING, DELETE_MEETING } from '../actions/actionsDate';

export const persistData = store => next => action => {

    let localState = localStorage.getItem('calendarApp');

    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    else {
        let all = action.payload;
        let meetingState = { all: all };
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
        case SAVE_NEW_MEETING:
            let day = action.payload.date;
            if (!localState.meetings.all[day]) {
                Object.assign(localState.meetings.all, {[day]: []});
            }
            localState.meetings.all[day] = [...localState.meetings.all[day], action.payload];
            localStorage.setItem('calendarApp', JSON.stringify(localState));
            break;
        case DELETE_MEETING:
            let dayId = action.payload.day;
            console.log(localState);
            localState.meetings.all[dayId] = localState.meetings.all[dayId].filter((meeting, index) => {
                return (index + 1) !== action.payload.id;
            });
            localStorage.setItem('calendarApp', JSON.stringify(localState));
            break;
        case UPDATE_MEETING:
            let current = action.payload.day;
            localState.meetings.all[current] = localState.meetings.all[current].map((meeting, index) => {
                if (index + 1 === action.payload.id) {
                    return action.payload;
                }
                return meeting;
            });
            localStorage.setItem('calendarApp', JSON.stringify(localState));
            break;
        default:
            result = next(action);
            return result;
    }
}