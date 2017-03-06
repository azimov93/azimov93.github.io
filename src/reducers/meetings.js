import { GET_ALL_MEETINGS, UPDATE_MEETING, EDIT_MEETING, CREATE_MEETING, DELETE_MEETING, SAVE_NEW_MEETING, SET_CURRENT_MEETING, TOGGLE_FORM, DISMISS_FORM } from '../actions/actionsDate';

const getNextId = (lastId) => {
    return lastId + 1;
};

const INITIAL_MEETING_STATE = {
    lastId: 0,
    all: {},
    current: {id: null}
};

export function meetings(state = INITIAL_MEETING_STATE, action = {}) {
    switch(action.type) {
        case GET_ALL_MEETINGS:
            let lastId = state.lastId;
            let meetingsList = {};
            let dayId = Object.keys(action.payload.meetings.all);
            let days = dayId.map(day => {
                let meetings = action.payload.meetings.all[day].map(meeting => {
                    lastId = getNextId(lastId);
                    meeting.id = lastId;
                    return meeting;
                });
                Object.assign(meetingsList, {[day]: meetings});
            });
            return Object.assign({}, state, {lastId: lastId}, {all: meetingsList});
        case SET_CURRENT_MEETING:
            let newCurrent = state.current.id === action.payload.id ? INITIAL_MEETING_STATE.current
                : action.payload;
            return Object.assign({}, state, {current: newCurrent});
        case UPDATE_MEETING:
            let current = action.payload.day;
            return Object.assign({}, state, {current: action.payload}, {all: {[current]: state.all[current].map(meeting => {
                    if (meeting.id === action.payload.id) {
                        return action.payload;
                    }
                    return meeting
                })}}
            );
        case SAVE_NEW_MEETING:
            let newMeeting = action.payload;
            let day = newMeeting.date;
            newMeeting.id = getNextId(state.lastId);
            let allMeetings = state.all[day];
            allMeetings.push(newMeeting);
            return Object.assign({}, state, {all: {[day]: allMeetings}});
        case DELETE_MEETING:
            let currentDay = action.payload.day;
            return Object.assign({}, state, {
                all: {[currentDay]: state.all[currentDay].filter(meeting => {
                    return meeting.id !== action.payload.id;
                })
            }});
        default: return state;
    }
}

const INITIAL_FORM_STATE = {
    isOpen: false,
    newEntry: false
};

export function form(state = INITIAL_FORM_STATE, action = {}) {
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