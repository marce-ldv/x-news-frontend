import React, { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

export const useGetArticles = ( url ) => {
    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(true);

    const fetchUrl = async () => {
        const response = await axios.get( url );
        setArticles(response);
        setLoading(false);
    }

    useEffect( () => {
        fetchUrl( 
            [ articles, loading ]
        )
    }, [] )
    return [articles, loading];
}

/*
const reducerArticles = ( type, state, payload ) => {
    switch(type) {
        case 'ADD_ARTICLE':
            return 'payload'
    }
}

const [state, dispatch] = useReducer(reducerArticles)

export const useGetArticles = async () => {
    const response = await axios.get('http://localhost:4000/articles')
    if( ! response ) console.log(`void`)
    dispatch({ type: 'ADD_ARTICLE', response })
    return response;
}

export const setArticles = async ( article ) => {
    // dispatch(isLoading);
    const response = await axios.post('http://localhost:4000/articles');
    dispatch(article);
}
*/
