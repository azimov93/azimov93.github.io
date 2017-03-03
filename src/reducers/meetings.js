import { GET_ALL_MEETINGS, UPDATE_MEETING, CREATE_MEETING, DELETE_MEETING, SET_CURRENT_MEETING } from '../actions/actionsDate';

const getNextId = (lastId) => {
    return lastId + 1;
};

const INITIAL_MEETING_STATE = {
    lastId: 0,
    all: {},
    current: {id: null}
};

export default function meetings(state = INITIAL_MEETING_STATE, action = {}) {
    switch(action.type) {
        case GET_ALL_MEETINGS:
            let lastId = state.lastId;
            let dayId = Object.keys(action.payload.meetings.all);
            let days = dayId.map(day => {
                let meetings = action.payload.meetings.all[day].map(meeting => {
                    console.log(meeting);
                    lastId = getNextId(lastId);
                    meeting.id = lastId;
                    return meeting;
                });
                return Object.assign({}, state, {lastId: lastId}, {all: days});
            });
        case SET_CURRENT_MEETING:
            let newCurrent = state.current.id === action.payload.id ? INITIAL_MEETING_STATE.current
                : action.payload;
            return Object.assign({}, state, {current: newCurrent});
        case UPDATE_MEETING:
            return Object.assign({}, state, {current: action.payload}, {all: state.all.map(meeting => {
                    if (meeting.id === action.payload.id) {
                        return action.payload;
                    }
                    return meeting
                })}
            );
        case CREATE_MEETING:
            let newMeeting = action.payload;
            let day = Object.keys(newMeeting)[0];
            newMeeting[day].id = getNextId(state.lastId);
            let allMeetings = state.all[day];
            allMeetings.push(newMeeting);
            return Object.assign({}, state, {all: {[day]: allMeetings}});
        case DELETE_MEETING:
            return Object.assign({}, state, {
                all: state.all.filter(meeting => {
                    return meeting.id !== action.payload;
                })
            });
        default: return state;
    }
}