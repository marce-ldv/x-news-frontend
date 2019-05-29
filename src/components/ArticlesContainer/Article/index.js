import React from 'react'
import './styles.scss'
import { Card } from "antd";

const Article = (props) => {
    return (
        <div className="card-el">
            <Card
                {...props}
            />
        </div>
    )
}

export default Article