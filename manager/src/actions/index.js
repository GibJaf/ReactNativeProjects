import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_STATUS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_STATUS });

        // signInWithEmailAndPassword not working
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log("Inside .then after signInWithEmailAndPassword and before loginUserSuccess()");
                loginUserSuccess(dispatch, user);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => {
                        console.log("Inside .catch.then after createUserWithEmailAndPassword before loginUserSuccess()");
                        loginUserSuccess(dispatch, user);
                    })
                .catch(() => {
                    console.log("Inside .catch.catch before loginUserFail()");
                    loginUserFail(dispatch);
                });
            });
    };
};

const loginUserFail = (dispatch) => {
    console.log("Inside loginUserFail");
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    console.log("Inside loginUserSuccess");
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};