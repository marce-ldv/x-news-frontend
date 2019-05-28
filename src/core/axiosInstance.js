import axios from 'axios';

export const apiConfig = {
    baseURL: 'http://localhost:4000/'
};

const axiosInstance = axios.create({
    baseURL: apiConfig.baseURL
});

axiosInstance.interceptors.request.use( (config) => {
    const token = localStorage.getItem( 'token' );

    if ( token ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, err => Promise.reject( err ) );

export default axiosInstance;