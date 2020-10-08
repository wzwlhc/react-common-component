import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { defaultFormLayout } from '@common/constant';
import PropTypes from 'prop-types';
import HiddenSelectUnKnowId from '@/common/Components/Select/commonSelect/HiddenSelectUnKnowId';
import { handleFilterOption } from '@common/FilterOption';

const PinYinFilterSelect = ({
    form, field, label,
    defaultLayout, rules,
}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const arr = [
                {
                    id: 'caf4z7f8py1',
                    name: '强都藏A1'
                },
                {
                    id: 'caf4z7f8py2',
                    name: '孙悟空b2'
                },
                {
                    id: 'caf4z7f8py3',
                    name: '猪八戒c3'
                },
                {
                    id: 'caf4z7f8py4',
                    name: '沙悟净D4'
                },
            ]
            setData(arr);
        }, 500);
    }, []);
    return (
        <Form.Item
            name={field}
            label={label}
            rules={rules}
            {...defaultLayout}
        >
            <HiddenSelectUnKnowId
                selectSource={data}
                filterOption={handleFilterOption}
                form={form}
                placeholder="请选择爱好"
            />
        </Form.Item>
    )
}

PinYinFilterSelect.defaultProps = {
    field: 'pinyin',
    label: 'pinyin',
    defaultLayout: defaultFormLayout,
    rules: [{
        required: true,
        message: '邮箱不能为空!'
    }],
}
PinYinFilterSelect.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultLayout: PropTypes.shape({
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
    }),
    rules: PropTypes.array,
}

export default PinYinFilterSelect;
