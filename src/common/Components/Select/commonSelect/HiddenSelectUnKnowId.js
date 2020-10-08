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
        const { selectSource, value, isHide, labelInValue } = nextProps;
        // isHide为false的情况, 这样会显示未知Id
        if (!isHide) {
            if (!selectSource.length) {
                return { value, loading: true, };
            }
            return { value, loading: false, };
        }
        // 判断是否为多选, 多选value为数组, 单选为String or Number
        if (value && value.constructor === Array) {
            let newValue = [];
            if (labelInValue) {
                newValue = handleArrayObjectFieldChange(selectSource.filter(itm => {
                    // itm.value是labelInValue的情况下 
                    return value.find(obj => obj === itm.id || obj.value === itm.id);
                }));
            } else {
                newValue = value.filter(itm => {
                    return selectSource.find(obj => obj.id === itm);
                })
            }
            if (!selectSource.length) {
                return {
                    value: newValue,
                    loading: true,
                }
            }
            return {
                value: newValue,
                loading: false,
            };
        }
        const newValue = selectSource.filter(obj => {
            // labelInValue为true 可以设置obj{}或者设置id
            return obj.id === ((value && value.value) || value);
        });
        const valueStr = newValue.length || selectSource.includes(value) ? value : undefined;

        // labelInValue为true的情况下
        const [valueObj] = handleArrayObjectFieldChange(newValue);
        const vObj = valueObj ? valueObj : undefined;
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
        const { onChange, mode } = this.props;
        if (!value) {
            onChange && onChange(value);
            return;
        }
        if (!mode) return;
        onChange && onChange(value);

    }

    handleSelect = value => {
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
    labelInValue: PropTypes.bool.isRequired,
    mode: PropTypes.oneOf([
        'multiple', 'tags', ''
    ]).isRequired,
    disabled: PropTypes.any,
    children: PropTypes.any,
    filterOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
    showSearch: PropTypes.bool,
}

export default HiddenSelectUnKnowId;