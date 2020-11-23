import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-app1.herokuapp.com',

});

export default instance;