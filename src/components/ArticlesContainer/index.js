import React from 'react'
import { useGetArticles } from './hooks'
import './styles.scss'
import ModalCustom from "../GlobalComponents/Modal";
import {Field, FieldArray, Formik} from "formik";
import {Card, Form, Icon} from "antd";
import {InputCustom} from "../GlobalComponents/Input";
import {ButtonCustom} from "../GlobalComponents/Button";
import Article from "./Article";

const { Meta } = Card;

const ArticlesContainer = () => {
    const [ articles, loading ] = useGetArticles('articles');

    return (
        <div>
            {loading ? 
                <div>
                    Loading... Wait a momment
                </div>
            :
                <div className="articles-container">
                    {articles && articles.data.map( art =>
                        <Article
                            hoverable
                            cover={
                                <img
                                    alt={art.title}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Road_to_mount_cook_new_zealand.jpg/1200px-Road_to_mount_cook_new_zealand.jpg"
                                />
                            }
                        >
                            <Meta title={art.title} description={art.description} />
                        </Article> )}
                </div>
            }

            <ModalCustom />
        </div>
    )
}

export default ArticlesContainer