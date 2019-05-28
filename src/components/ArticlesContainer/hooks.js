import { useEffect, useState } from 'react'
import axiosInstance from '../../core/axiosInstance'

export const useGetArticles = ( url ) => {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchUrl = async () => {
        const response = await axiosInstance.get( url );
        setArticles(response);
        setLoading(false);
    };

    useEffect( () => {
        fetchUrl()
    }, [] );
    return [articles, loading];
};
