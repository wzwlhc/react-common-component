import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import { handleArrayObjectFieldChange } from '@common/method';

const { Option } = Select;

class HiddenSelectUnKnowId extends Component {
    state = {
        value: undefined,
        loading: true,
    }

    static getDerivedStateFromProps(nextProps) {
        console.log(nextProps);
        const { selectSource, value, isHide, labelInValue, name } = nextProps;
        // isHide为false的情况, 这样会显示未知Id
        if (!isHide) {
            if (!selectSource.length) {
                return { value, loading: true, };
            }
            return { value, loading: false, };
        }

        // 判断是否为多选, 多选value为数组, 单选为String or Number
        if (value && value.constructor === Array) {
            const newValue = value.filter(itm => {
                // itm.value是labelInValue的情况下
                return selectSource.find(obj => obj.id === itm || itm.value);
            })
            if (!selectSource.length) {
                return {
                    value: value,
                    loading: true,
                }
            }
            return {
                value: value,
                loading: false,
            };
        }
        const newValue = selectSource.filter(obj => {
            // labelInValue为true 可以设置obj{}或者设置id
            return obj.id === ((value && value.value) || value);
        });
        const valueStr = newValue.length || selectSource.includes(value) ? value : name;

        // labelInValue为true的情况下
        console.log(newValue);
        const [valueObj] = handleArrayObjectFieldChange(newValue);
        const vObj = valueObj ? valueObj : name;
        if (!selectSource.length) {
            return {
                value: labelInValue ? vObj : valueStr,
                loading: true,
            }
        }

        return {
            value: labelInValue ? vObj : valueStr,
            loading: false,
        };
    }

    handleChange = value => {
        console.log('handleChange')
        const { onChange, mode } = this.props;
        if (!value) {
            onChange && onChange(value);
            return;
        }
        if (!mode) return;
        onChange && onChange(value);

    }

    handleSelect = value => {
        console.log('handleSelect')
        const { onChange, mode } = this.props;
        if (mode) return;
        onChange && onChange(value);
    }

    render() {
        const {
            mode,
            disabled,
            selectSource,
            labelInValue,
            children,
            filterOption,
            showSearch,
            ...restProps
        } = this.props;
        const { value, loading } = this.state;
        console.log(value);
        return (
            <Select
                showSearch={showSearch}
                filterOption={filterOption}
                {...restProps}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                mode={mode}
                labelInValue={labelInValue}
                value={value}
                loading={loading}
                disabled={disabled}
            >
                {
                    selectSource.map(itm =>
                        <Option disabled={itm.disabled} key={itm.id} value={itm.id}>{itm.name}</Option>
                    )
                }
            </Select>
        )
    }
}

HiddenSelectUnKnowId.defaultProps = {
    isHide: true,
    selectSource: [],
    labelInValue: false,
    filterOption: false,
    mode: '',
    disabled: false,
    children: '',
    showSearch: false,
}
HiddenSelectUnKnowId.propTypes = {
    isHide: PropTypes.bool.isRequired,
    selectSource: PropTypes.array.isRequired,
    labelInValue: PropTypes.bool,
    mode: PropTypes.oneOf([
        'multiple', 'tags', ''
    ]).isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.any,
    filterOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
    showSearch: PropTypes.bool,
}

export default HiddenSelectUnKnowId;