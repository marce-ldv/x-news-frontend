import React, { useState } from "react";
import "antd/dist/antd.css";
import {Modal, Button, Form} from "antd";
import {Field, FieldArray, Formik} from "formik";
import {InputCustom} from "../Input";
import {ButtonCustom} from "../Button";
import {usePostArticles} from "./hooks";
import { Toast } from '../Toast'

const ModalCustom = (props) => {
    const [modalText, setModalText] = useState('Add an article');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [ addArticle ] = usePostArticles('articles');

    const handleSubmit = ( valuesForm ) => {
        addArticle(valuesForm);
    };

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setTimeout(() => {
            setVisible(false);
            setLoading(false);
        }, 2000);

};
    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Add article
            </Button>
            <Modal
                {...props}
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={loading}
                onCancel={handleCancel}
            >
                <p>{modalText}</p>
                <Formik
                    onSubmit={( values ) => {
                        setTimeout(() => {
                            console.log('submit: ',values)
                            handleSubmit( values );
                        }, 1000);
                    }}
                    render={props => (
                        <form onSubmit={props.handleSubmit} className="form-login">
                            <FieldArray>
                                <Form.Item>
                                    <Field
                                        type="text"
                                        name="title"
                                        placeholder="Enter title"
                                        component={InputCustom}
                                    />
                                    <Field
                                        type="text"
                                        name="description"
                                        placeholder="Enter description"
                                        component={InputCustom}
                                    />
                                </Form.Item>
                            </FieldArray>
                            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                            <button type="primary" className="button-submit">Submit</button>
                        </form>
                    )}
                />
            </Modal>
        </div>
    );
}

export default ModalCustom;