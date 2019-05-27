import React, {useEffect, useState} from 'react'
import { useGetArticles } from './hooks'
import './styles.scss'

const ArticlesContainer = () => {
    const [ articles, loading ] = useGetArticles('articles');

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