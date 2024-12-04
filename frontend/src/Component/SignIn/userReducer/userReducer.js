
const initialState = {
    email: '',
    username: '',
    role: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                ...action.payload,
            };
        case 'LOGOUT_USER':
            return initialState;
        default:
            return state;
    }
};



export default userReducer;
