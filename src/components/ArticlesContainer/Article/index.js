import React from 'react'
import './styles.scss'
import { Card } from "antd";

const { Meta } = Card;

const Article = (props) => {
    return (
        <div>
            <Card
                {...props}
            >

            </Card>
        </div>
    )
}

export default Article