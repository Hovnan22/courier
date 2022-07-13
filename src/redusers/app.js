import { SET_LOGIN, ADD_TO_BASKET } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    basketItems: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOGIN: {
            return {
                ...state,
                isLoading: payload
            }
        }
        case ADD_TO_BASKET: {
            return {
                ...state,
                basketItems: [...state.basketItems, payload]
            }
        }
        default: {
            return state;
        }
    }
}
