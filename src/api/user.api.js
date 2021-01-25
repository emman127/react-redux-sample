import api from '../utils/api';

export const getAllUser = async () => {
    return api.get('/users');
}