import axios from 'axios';
// require('dotenv').config();

const apiURL = 'https://jsonplaceholder.typicode.com'

const get = async (path, headers) => await axios.get(`${apiURL}${path}`, headers);

export default {
    get
}