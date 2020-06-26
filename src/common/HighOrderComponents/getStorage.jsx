import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WithGetLocalStorageData = (key = 'user') => WrappedComponent => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                data: '',
            }
        }
        componentDidMount() {
            const data = localStorage.getItem(key);
            this.setState({ data });
        }
        render() {
            const { data } = this.state;
            return <WrappedComponent data={data} {...this.props} />
        }
    }
}

export default WithGetLocalStorageData;