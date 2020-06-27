import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import BasicTooptip from '@common/Components/Tooltip/basicTooptip';
import HiddenSelectUnKnowId from '@common/Components/CustomizeSelect/HiddenSelectUnKnowId';

class AddSelectInputGroup extends Component {

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
        const { onClick, data, onChange, title, ...restProps } = this.props;
        const { value } = this.state;
        return (
            <Input.Group compact>
                <HiddenSelectUnKnowId
                    {...restProps}
                    onChange={onChange}
                    value={value}
                    selectSource={data}
                    style={{flex: 1}}
                />
                {
                    onClick && 
                    <div>
                        <BasicTooptip title={title}>
                            <Button 
                                style={{height: "100%"}}
                                icon={<PlusOutlined />}
                                type="primary"
                            />
                        </BasicTooptip>
                    </div>
                }
            </Input.Group>
        )
    }
}

AddSelectInputGroup.defaultProps = {
    title: "点击增加爱好",
    onClick: false,
    data: [],
}
AddSelectInputGroup.propTypes = {
    data: PropTypes.array.isRequired,
    onClick: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.bool,
    ]),
    title: PropTypes.any,
}

export default AddSelectInputGroup;
