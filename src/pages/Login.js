import React, {useRef} from 'react';
import styles from "./styles.module.css";
import {Button, Card, Form, Input, notification, Space, Alert} from "antd"
import * as emailProviders from "email-providers/all.json"
const LoginPage = () => {

    const [notificationApi, contextHolder] = notification.useNotification();
    const [loading, setLoading] = React.useState(false);
    const [message , setMessage] = React.useState("No Email detected");
    const [showMessage , setShowMessage] = React.useState(false);
    const [emailType , setEmailType] = React.useState("personal");
    const inputRef = useRef(null);

    const handleInputEmail = () => {
        setShowMessage(false)
    }

    const handleAlertClose = () => {
        setShowMessage(false);
    };
    const onSubmit = (values) => {
        // 2. Extract the domain
        const broken = values.email.split('@')

        //@ts-ignore
        if (emailProviders.default.includes(broken[1])){
            setMessage("Email Is Personal")
        }else {
            setMessage("Email Is Work")
        }

        setShowMessage(true)
    }

    return (
        <div className={styles.wrapper}>
            {contextHolder}
            <Card>
                <Form name="login" layout="vertical" initialValues={{remember: true}}
                      onFinish={onSubmit}
                      autoComplete="off">
                    <Form.Item label="Email" name="email"
                               rules={[
                                   {
                                       required: true,
                                       message: 'Please input your email!'
                                   },
                                   {
                                       type: 'email',
                                       message: 'Please enter a valid email address',
                                   }]}>
                        <Input placeholder={"example@elay.io"} onInput={handleInputEmail}/>
                    </Form.Item>
                    <Space direction="vertical" style={{ width: '100%', marginBottom: '20px' }}>
                        {showMessage && emailType === 'personal' ? (
                            <Alert message={message} type="success" showIcon onClose={handleAlertClose} />
                        ) : showMessage ? (
                            <Alert message={message} type="info" showIcon onClose={handleAlertClose} />
                        ) : null}
                    </Space>
                    <div style={{display: 'flex', justifyContent: "flex-end"}}>
                        <Button loading={loading} style={{minWidth: "150px"}} type="primary" htmlType="submit">Detect</Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;