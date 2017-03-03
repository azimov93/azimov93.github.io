// export const GET_MEETINGS = 'GET_MEETINGS';
// export const SET_MEETINGS = 'SET_MEETINGS';
// export const DELETE_MEETINGS = 'DELETE_MEETINGS';
// export const UPDATE_MEETINGS = 'UPDATE_MEETINGS';
//
// export const getData = (data) => {
//     return {
//         type: GET_MEETINGS,
//         data
//     }
// };
//
// export const setData = (data) => {
//     return {
//         type: SET_MEETINGS,
//         data
//     }
// };
//
// export const deleteData = (data) => {
//     return {
//         type: DELETE_MEETINGS,
//         data
//     }
// };
//
// export const updateData = (data) => {
//     return {
//         type: UPDATE_MEETINGS,
//         data
//     }
// };


export const GET_ALL_MEETINGS = 'GET_ALL_MEETINGS';
export const EDIT_MEETING = 'EDIT_MEETING';
export const UPDATE_MEETING = 'UPDATE_MEETING';
export const CREATE_MEETING = 'CREATE_MEETING';
export const DELETE_MEETING = 'DELETE_MEETING';
export const SET_CURRENT_MEETING = 'SET_CURRENT_MEETING';

let meetings = {
    'someDay': [
        {
            name: 'Omelette',
            description: 'Some Test'
        },
        {
            name: 'Omelette',
            description: 'Some Test'
        }
    ]
};

export const actions = {
    getAllMeetings: () => {
        return (dispatch) => {
            dispatch(
                {
                    type: GET_ALL_MEETINGS,
                    payload: meetings
                }
            );
        }
    },

    setCurrentMeeting: (meeting) => {
        return {
            type: SET_CURRENT_MEETING,
            payload: meeting
        }
    },

    editMeeting: () => {
        return {
            type: EDIT_MEETING
        }
    },

    updateMeeting: (meeting) => {
        return {
            type: UPDATE_MEETING,
            payload: meeting
        }
    },

    createMeeting: (meeting) => {
        return {
            type: CREATE_MEETING,
            payload: meeting
        }
    },

    deleteMeeting: (meetingId) => {
        return {
            type: DELETE_MEETING,
            payload: meetingId
        }
    },
};