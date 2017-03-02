export const GET_MEETS = 'GET_MEETS';
export const SET_MEETS = 'SET_MEETS';
export const DELETE_MEETS = 'DELETE_MEETS';
export const UPDATE_MEETS = 'UPDATE_MEETS';

export const getData = (data) => {
    return {
        type: GET_MEETS,
        data
    }
};

export const setData = (data) => {
    return {
        type: SET_MEETS,
        data
    }
};

export const deleteData = (data) => {
    return {
        type: DELETE_MEETS,
        data
    }
};

export const updateData = (data) => {
    return {
        type: UPDATE_MEETS,
        data
    }
};