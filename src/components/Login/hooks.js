import { useEffect } from 'react';
import axiosInstance from '../../core/axiosInstance';

export const useLogin = ( url ) => {

    const loginAxios = async ( formData ) => {
        const response = await axiosInstance.post( url, formData );
        localStorage.setItem('token', response.data);
    };

    useEffect( () => {
        loginAxios()
    }, [] );
    return [loginAxios];
};