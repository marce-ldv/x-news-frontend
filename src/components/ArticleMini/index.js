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
                    <p>Autor: Sanson Sansa Sense</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img className={"z-preview"} src={"https://via.placeholder.com/600x400"}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>CHICO BRONY QUEMA COLEGIO EN REPRESALIAS A SU LENTA RESPUESTA A SUS RECLAMOS</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Paso en la localidad de venado tuerto, el auto del hecho fafaf ajhfjksha kjfhk jhaskf jhakfj hakfh aksfj haksf hjaksfj hakjfh akjsf hajkf </h4>
                </Col>
            </Row>
        </div>
    )
}

export {
    ArticleMini
};
