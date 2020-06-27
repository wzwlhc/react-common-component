import React from 'react'
import PropTypes from 'prop-types'
import BasicTooptip from './basicTooptip';

const EllipsisTooptip = ({ maxLen, children }) => {
    return (
        <BasicTooptip title={children}>
            {
                children.length > maxLen ? 
                    children.split('').slice(0, maxLen).concat('...').join('') :
                    children 
            }
        </BasicTooptip>
    )
}

EllipsisTooptip.propTypes = {
    maxLen: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
}

EllipsisTooptip.defaultProps = {
    maxLen: 15,
}

export default EllipsisTooptip;
