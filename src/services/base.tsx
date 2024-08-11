import axios from "axios";
import { toast } from 'react-toastify'

export const Axios = axios.create({
    baseURL: 'http://127.0.0.1:5000'
})

// Request interceptor
Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Response interceptor
Axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    if (error.response) {
        null
    }
    else {
        toast.error('Sunucu Hatası.')
    }
    return Promise.reject(error);
});