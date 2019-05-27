import { useEffect, useReducer, useState } from 'react'
import axiosInstance from '../../config/axiosInstance'

export const useLogin = ( url ) => {
    console.log('url: ',url);

    const [username,setUsername] = useState([]);
    const [password,setPassword] = useState([]);

    const loginAxios = async ( formData ) => {
        console.log('llegas al loginaxios?')
        console.log('form data:', formData)
        await axiosInstance.post( url, formData );
        console.log(localStorage.getItem('token'))
        debugger
        setUsername(username);
        setPassword(password);
    }

    useEffect( () => {
        loginAxios()
    }, [] )
    return [loginAxios];
}