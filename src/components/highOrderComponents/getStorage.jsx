import React, { useEffect, useState, Component } from 'react';


const WithGetLocalStorageData = (key = 'user') => WrappedComponent => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                data: ''
            }
        }
        componentWillMount() {
            localStorage.setItem('user', 111)
        }
        componentDidMount() {
            const data = localStorage.getItem('user');
            this.setState({ data });
        }
        render() {
            const { data } = this.state;
            return <WrappedComponent data={data} {...this.props} />
        }

    }
}

export default WithGetLocalStorageData;