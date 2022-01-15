export const DELETE_FEATURE = 'DELETE_FEATURE';
export const UPDATE_FEATURE = 'UPDATE_FEATURE';
export const GET_FEATURE = 'GET_FEATURE';
export const GET_LIST_FEATURE = 'GET_LIST_FEATURE';
export const EDIT_FEATURE = 'EDIT_FEATURE';
export const CREATE_FEATURE = 'CREATE_FEATURE';
export const SHOW_LIST_FEATURE = 'SHOW_LIST_FEATURE';

export const deleteFeature = payload => ({
    type: DELETE_FEATURE,
    payload
})

export const updateFeature = payload => ({
    type: UPDATE_FEATURE,
    payload
})

export const getFeature = payload => ({
    type: GET_FEATURE,
    payload
})

export const getListFeature = payload => ({
    type: GET_LIST_FEATURE,
    payload
})

export const editFeature = payload => ({
    type: EDIT_FEATURE,
    payload
})

export const createFeature = payload => ({
    type: CREATE_FEATURE,
    payload
})

export const showListFeature = payload => ({
    type: SHOW_LIST_FEATURE,
    payload
})