import { SET_LOGIN } from "../actions/actionType"

const initialState = {
    isLoading: false,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN: {
            return {
                ...state,
                isLoading: payload
            }
        }

        default: {
            return state;
        }
    }
}
