import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { defaultFormLayout } from '@common/constant';
import { guid } from '@common/method';
import AddSelectInputGroup from '@common/Components/Input/InputGroup/addSelectInputGroup';
import PropTypes from 'prop-types';

const AddSelect = (
    {   
        form, field, label,
        defaultLayout, isRequest,
        selectData, rules,
    }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            const data = [...Array(20).keys()].map(itm => ({ id: guid(), name: itm + 1 }));
            setData(data);
        }, 6000)
    }, [])
    const dataSource = isRequest ? data : selectData;
    return (
        <Form.Item 
            name={field} 
            label={label}
            rules={rules} 
            {...defaultLayout}
        >
            <AddSelectInputGroup
                data={dataSource} 
                form={form}
                onClick={1}
                placeholder="请选择爱好"
            />
        </Form.Item>
    )
}

AddSelect.defaultProps = {
    field: 'gender',
    label: 'Gender',
    isRequest: true,
    selectData: [],
    defaultLayout: defaultFormLayout,
    rules: [],
}
AddSelect.propTypes = {
    field: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired,
    isRequest:  PropTypes.bool.isRequired,
    selectData: PropTypes.array,
    defaultLayout: PropTypes.shape({
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
    }),
    rules: PropTypes.array.isRequired,
}

export default AddSelect;
