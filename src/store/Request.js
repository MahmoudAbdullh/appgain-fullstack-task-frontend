import axios from 'axios'
// Set config defaults when creating the instance
let isSSR = typeof window === 'undefined';
const instance = axios.create({
    baseURL: process.env.BE_API || 'http://localhost:4000/api'
});

export default instance;
