import React from 'react';
import HiddenSelectUnKnowId from './commonSelect/HiddenSelectUnKnowId';
import PropTypes from 'prop-types';

class BasicSelect extends React.Component {
    state = {
        value: undefined,
    }

    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            const { value } = nextProps;
            return {
                value,
            };
        }
        return null;
    }

    render() {
        const { dataSource, ...otherProps } = this.props;
        const { value } = this.state;
        return (
            <HiddenSelectUnKnowId
                selectSource={dataSource}
                value={value}
                {...otherProps}
            />
        )
    }
}

BasicSelect.propTypes = {

}
BasicSelect.defaultProps = {

}

export default BasicSelect;
