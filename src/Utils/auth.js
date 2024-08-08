import axios from "axios";
import Cookies from 'js-cookie';


const client = axios.create();
client.interceptors.request.use(function (config) {
    const token = Cookies.get('tokenAdmin');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
    }, function (error){
        return Promise.reject(error);
    }
)

export default client;