import React, { useState, useEffect } from 'react';
import VCode from '@common/Components/VCode';
import { Form, Row, Col, Button, Input, Select } from 'antd';
import UseScreenSize from '@common/Components/ScreenSize';
import AddSelect from '@common/Components/Select/addSelect';
import './test.less';
import './styles/default.less';
import { defaultFormLayout } from './common/constant';
import { guid } from '@common/method';

const { Option } = Select;

const Test = () => {
    const [form] = Form.useForm();
    const [size, setSize] = UseScreenSize();
    const [refresh, setRefresh] = useState(1);
    const data = [...Array(20).keys()].map(itm => ({ id: itm, name: itm }));
    useEffect(() => {
        form.setFieldsValue({ 
            username: '222222', 
            select: 1, 
            gender: guid(),
        });
    }, [])
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeScreen = () => {
        setSize({
            width: 11,
            height: 22
        })
    }

    const handleRefresh = () => {
        // 模拟注册失败清空验证码
        setRefresh(refresh + 1);
    }

    const handleSet = () => {
        console.log('1111')
        form.setFieldsValue({ username: '222222', gender: 33 });
    }

    return (
        <div>
            <div className='test'>
                {size.width}x{size.height}
            </div>
            <div>
                <Button onClick={handleChangeScreen}>changeScreenSize</Button>
            </div>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <Row className='vcode'>
                    <Col span={9}>
                        <VCode
                            form={form}
                            refresh={refresh}
                        />
                    </Col>

                    <Col span={9}>
                        <AddSelect form={form} />
                    </Col>

                    <Col span={9}>
                        <Form.Item 
                            name='username' 
                            label='username' 
                            {...defaultFormLayout}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={9}>
                        <Form.Item 
                                name='select' 
                                label='select' 
                                {...defaultFormLayout}
                            >
                                <Select style={{flex: 1}}>
                                    {data.map(itm => {
                                        return <Option key={itm.id} value={itm.id}>{itm.name}</Option>
                                    })}
                                </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={handleRefresh}>
                        Reset
                    </Button>
                    <Button onClick={handleSet}>
                        set
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default Test;