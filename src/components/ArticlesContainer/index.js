import React, {useEffect} from 'react'
import axios from 'axios'
import { useSomething } from './hooks'
import './styles.scss'

// const a = useSomething()

const ArticlesContainer = () => {

    useEffect( () => {
        return axios.get('http://localhost:4000/articles')
    } )

    return (
        <div>
            
        </div>
    )
}

export default ArticlesContainer