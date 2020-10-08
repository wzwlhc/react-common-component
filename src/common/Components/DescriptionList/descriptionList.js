import React from 'react';
import { Row } from 'antd';
import PropTypes from 'prop-types';
import { constant } from './constant';
import './index.less';

const DescriptionList = props => {
    const {
        children,
        span,
        labelCol,
        wrapperCol,
        style
    } = props;
    return (
        <Row>
            {
                React.Children.map(children, item => {
                    return React.cloneElement(item, {
                        labelCol: constant[labelCol],
                        wrapperCol: constant[wrapperCol],
                        style,
                        span,
                    })
                })
            }
        </Row>
    )
}

DescriptionList.defaultProps = {
    span: 6,
    labelCol: 8,
    wrapperCol: 16,
    style: {},
}
DescriptionList.propTypes = {
    span: PropTypes.number,
    labelCol: PropTypes.number,
    wrapperCol: PropTypes.number,
    style: PropTypes.object,
}

export default DescriptionList;