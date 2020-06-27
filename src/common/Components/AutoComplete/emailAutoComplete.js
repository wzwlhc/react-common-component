import React, { useState } from 'react';
import { AutoComplete, Form } from 'antd'; 
import PropTypes from 'prop-types';

import { defaultEmailSuffixs, defaultFormLayout } from '@common/constant';

const { Option } = AutoComplete;

const EmailAutoComplete = ({
    field, label,
    defaultLayout, placeholder,
    rules,
}) => {
    const [result, setResult] = useState([]);
    const handleSearch = value => {
        let res = [];
        if (!value || value.indexOf('@') >= 0) {
            res = [];
        } else {
            res = defaultEmailSuffixs.split(',').map(itm => `${value}${itm}`);
        }
        setResult(res);
    };
    return (
        <Form.Item 
            name={field}
            label={label} 
            rules={rules}
            {...defaultLayout}
        >
            <AutoComplete onSearch={handleSearch} placeholder={placeholder}>
                {
                    result.map(itm => (
                        <Option key={itm} value={itm}>
                            {itm}
                        </Option>
                    ))
                }
            </AutoComplete>
        </Form.Item>
    )
}

EmailAutoComplete.defaultProps = {
    field: 'email',
    label: 'email',
    placeholder: '请输入邮箱!',
    defaultLayout: defaultFormLayout,
    rules: [{
        required: true,
        message: '邮箱不能为空!'
    }],
}
EmailAutoComplete.propTypes = {
    field: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    defaultLayout: PropTypes.shape({
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
    }),
    rules: PropTypes.array.isRequired,
}
export default EmailAutoComplete;
