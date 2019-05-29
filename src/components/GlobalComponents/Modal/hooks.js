import { useEffect } from 'react';
import axiosInstance from '../../../core/axiosInstance';

export const usePostArticles = ( url ) => {

    const addArticle = async ( formData ) => {
        const response = await axiosInstance.post( url, formData );
        if (response.status === 200) {

        }
    };

    useEffect( () => {
        addArticle()
    }, [] );
    return [addArticle];
};