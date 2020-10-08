import React from 'react';
import { Row, Col } from 'antd';

const Item = props => {
    const {
        label,
        children,
        labelCol,
        wrapperCol,
        style,
        span,
    } = props;
    return (
        <Col span={span} style={style}>
            <Row>
                <Col {...labelCol} className='col-right'>{label}</Col>
                <Col {...wrapperCol} className='col-left'>{children}</Col>
            </Row>
        </Col>
    )
}

export default Item;