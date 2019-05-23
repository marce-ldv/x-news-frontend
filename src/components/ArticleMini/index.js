import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';

const ArticleMini = () => {
    return (
        <div className={"z-article-mini"}>
            <Row type={"flex"} justify={"space-between"}>
                <Col>
                    <p>Fecha 5/22/2019</p>
                </Col>
                <Col>
                    <p>Autor: Adsadasdas</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>LOREM IMPSUM DOLOR SIT AMET ADSESAD KDKFDFNDI ADA FKDJSNFLS</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>lorem ipsum dolor sit amet asddafs jndfjg sdfllsdf</h4>
                </Col>
            </Row>

            <p>News</p>
            <Row type="flex" justify="space-around">
                <Col span={4}>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
                <Col span={4}>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
                <Col span={4}>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
                <Col span={4}>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
            </Row>
        </div>
    )
}

export {
    ArticleMini
};
