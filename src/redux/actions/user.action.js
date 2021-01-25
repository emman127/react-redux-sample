import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from '../types/user.type';

import { getAllUser } from '../../api/user.api';
// import axios from 'axios';

export const userRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const userSuccess = data => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

const userFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const allUsers = () => {
    return async dispatch => {
        dispatch(userRequest);
        try{
            // axios.get('https://jsonplaceholder.typicode.com/users')
            //     .then(response => {
            //         dispatch(userSuccess(response.data));
            //         console.log(response.data);
            //     });
            const response = await getAllUser();
            dispatch(userSuccess(response.data));
            console.log(response.data);
        }catch(error){
            dispatch(userFailure(error.message));
        }
    }
}