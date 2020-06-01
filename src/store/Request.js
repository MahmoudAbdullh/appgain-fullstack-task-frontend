import axios from 'axios'
// Set config defaults when creating the instance
let isSSR = typeof window === 'undefined';
const instance = axios.create({
    baseURL: "https://appgain-fullstack-task-api.herokuapp.com/api" //|| 'http://localhost:4000/api'
});

export default instance;
