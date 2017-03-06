import { GET_ALL_MEETINGS, UPDATE_MEETING, DELETE_MEETING, SAVE_NEW_MEETING, SET_CURRENT_MEETING } from '../actions/actionsDate';

export const INITIAL_STATE = {
    lastId: 0,
    all: {},
    current: {id: null},
};

const getNextId = (lastId) => {
    return lastId + 1;
};

export function meetings(state = INITIAL_STATE, action = {}) {
    switch(action.type) {
        case GET_ALL_MEETINGS:
            let lastId = 0;
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
            let newCurrent = state.current.id === action.payload.id ? INITIAL_STATE.current
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
            if (state.all[currentDay].length < 2) {
                delete state.all[currentDay];
                return Object.assign({}, state)
            } else {
                return Object.assign({}, state, {
                    all: {[currentDay]: state.all[currentDay].filter(meeting => {
                        return meeting.id !== action.payload.id;
                    })
                    }});
            }
        default: return state;
    }
}