import axios from "axios";


const client = axios.create();
client.interceptors.request.use(function (config) {
    const token = Cookies.get('tokenAdmin');
    config.headers['X-API-KEY'] = `Bearer ${token}`;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
    }, function (error){
        return Promise.reject(error);
    }
)