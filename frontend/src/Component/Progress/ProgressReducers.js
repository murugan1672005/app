const initialState = {
    learningProgress: 0,
    assignmentProgress: 0,
};

const progressReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROGRESS':
            return {
                ...state,
                learningProgress: action.payload.learningProgress,
                assignmentProgress: action.payload.assignmentProgress,
            };
        default:
            return state;
    }
};

export default progressReducer;
