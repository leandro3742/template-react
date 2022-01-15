const initialState = {
    feature: {},
    editFeature: {},
};
export default function reducers(state = initialState, action) {
    switch (action.type) {
        case 'CREATE_FEATURE':
            return{ ...state }
        case 'GET_FEATURE':
            return { ...state }

        default:
            return {...state}
    }
}