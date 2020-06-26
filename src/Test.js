import React, { useState } from 'react';
import VCode from '@common/Components/VCode';
import { Form, Row, Col, Button } from 'antd';
import UseScreenSize from '@common/Components/ScreenSize';
import './test.less';
import './styles/default.less';


const Test = () => {
    const [form] = Form.useForm();
    const [size, setSize] = UseScreenSize();
    const [refresh, setRefresh] = useState(1);
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
            >
                <Row className='vcode'>
                    <Col span={9}>
                        <VCode 
                            form={form} 
                            refresh={refresh}
                        />
                    </Col>
                </Row>
                <Row>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button onClick={handleRefresh}>
                        Reset
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default Test;