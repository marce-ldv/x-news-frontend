import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useGetArticles } from './hooks'
import './styles.scss'

const ArticlesContainer = () => {
    const [ articles, loading ] = useGetArticles( 'http://localhost:4000/articles' );

    return (
        <div>
            {loading ? 
                <div>
                    Loading... Wait a momment
                </div>
            :
                <div>
                    {articles && articles.data.map( art => <div> title: {art.title} <br/> description: {art.description} </div> )}
                </div>
            }
        </div>
    )
}

export default ArticlesContainer