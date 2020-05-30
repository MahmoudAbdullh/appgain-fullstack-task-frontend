import axios from 'axios'
// Set config defaults when creating the instance
let isSSR = typeof window === 'undefined';
const instance = axios.create({
    baseURL: ''
});

export default instance;
