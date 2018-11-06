import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-v1.firebaseio.com'
});

export default instance;