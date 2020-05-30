import axios from 'axios'
// Set config defaults when creating the instance
let isSSR = typeof window === 'undefined';
console.log(process.env);
//http://178.87.11.26:8077
//http://192.168.100.122:8077
//http://axistelcom.selfip.org:8077/api
const instance = axios.create({
    baseURL: 'http://axistelcom.selfip.org:8088/beapi/api'
});

//let token = jsCookie.get('token');
let token = !isSSR?sessionStorage.getItem('token'):null;
let company = !isSSR?sessionStorage.getItem('company'):null;
// Alter defaults after instance has been created

instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// instance.defaults.headers.common['Accept-Company'] = `axis`;
instance.defaults.headers.common['Accept-Company'] = company;
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/json';


export default instance;
