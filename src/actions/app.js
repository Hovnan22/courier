import { SET_LOGIN, ADD_TO_BASKET } from "./actionTypes";

export const LogIn = (LoggedStatus) => {
    return {
        type: SET_LOGIN,
        payload: LoggedStatus
    }
}
export const AddToBasket = (item) => {
    return {
        type: ADD_TO_BASKET,
        payload: item
    }
}
