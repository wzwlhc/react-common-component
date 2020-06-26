import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { defaultFormLayout } from '@common/constant';
import CodeInput from './codeInput';
import './index.less';

const VCode = ({ form, refresh }) => {
    const [vcodeValue, setVcode] = useState('');
    const handleChangeCode = value => {
        setVcode(value);
    }

    const compareVCode = (rule, value) => {
        if (!value || value === vcodeValue.toLowerCase() || value === vcodeValue.toUpperCase()) {
            return Promise.resolve();
        }
        return Promise.reject('验证码错误!');
    }


    return (
        <Form.Item
            {...defaultFormLayout}
            label="验证码"
            hasFeedback
            name="vCode"
            rules={[
                {
                    required: true,
                    message: '验证码不能为空!',
                },
                {
                    validator: compareVCode
                },
            ]}
        >
            <CodeInput
                form={form}
                changeCode={handleChangeCode}
                refresh={refresh}
            />
        </Form.Item>
    )
}

VCode.propTypes = {
    form: PropTypes.any.isRequired,
    refresh: PropTypes.number.isRequired,
}

VCode.defaultProps = {

}

export default VCode;
