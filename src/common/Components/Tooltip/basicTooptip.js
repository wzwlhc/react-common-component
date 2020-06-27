import React from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd';

const BasicTooptip = ({ title, placement, color, children }) => {
    return (
        <Tooltip title={title} placement={placement} color={color}>
            {children}
        </Tooltip>
    )
}

BasicTooptip.propTypes = {
    placement: PropTypes.oneOf([
        'topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom',
        'bottomLeft', 'bottom', 'bottomRight', 'rightTop', 'right', 'rightBottom', 
    ]).isRequired,
    title: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    color: PropTypes.any,
}

BasicTooptip.defaultProps = {
    placement: 'top',
}

export default BasicTooptip;
