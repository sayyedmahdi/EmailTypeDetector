import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import {Button, Col, Dropdown, message, Modal, Row, Space, Typography, Alert} from "antd";


const Header = () => {

    const user = React.useState(false)
    const [logoutLoading, setLogoutLoading] = React.useState(false);

    const getTitle = () => {
        return <Space></Space>
    }


    return (

        <div className={styles.wrapper}>
            <Row justify="space-between" align="middle">
                <Col> <img className={styles.icon} src="header-icon.png" alt="elay" /></Col>
                <Col pull={user ? 0 : 1} flex="auto" className={styles.title}>{getTitle()}</Col>

            </Row>
        </div>
    );
};

export default Header;