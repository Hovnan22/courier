import { SET_LOGIN } from "./actionType";

export default LogIn = (LoggedStatus) => {
    return {
        type: SET_LOGIN,
        payload: LoggedStatus
    }
}
