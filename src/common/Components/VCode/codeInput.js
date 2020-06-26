import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import options, { sCode } from './config';

const CodeInput = ({ onChange, changeCode, form, refresh }) => {

    const [inputValue, setValue] = useState('');
    const codeRef = React.createRef();

    useEffect(() => {
        onRraw();
        return (() => {

        })
    }, [])
    // 注册失败,清空验证码
    useEffect(() => {
        if(refresh !== 1) onRraw();
    }, [refresh])

    const customFloor = value => {
        return Math.floor(Math.random() * value)
    }

    const onRraw = () => {
        const canvas = codeRef.current;
        form.setFieldsValue({ vcode: '' });
        if(refresh !== 1) triggerChange('');
        setValue('');
        const context = canvas.getContext('2d');
        const { width: canvas_width, height: canvas_height } = canvas;
        const aCode = sCode.split(',');
        const { length } = aCode;
        const show_num = [];
        const { fontMinSize, fontMaxSize, fonts } = options;
        const { length: fontLength } = fonts;
        context.clearRect(0, 0, canvas_width, canvas_height);
        for (let i = 0; i < 4; i++) {
            const j = customFloor(length);  // 得到随机0 - aCode长度的值
            const deg = Math.random() - 0.5; // 字体旋转的角度 这样就有倾斜效果
            const txt = aCode[j];// 得到随机的一个内容
            show_num[i] = j >= 32 ? txt.toLowerCase() : txt.toUpperCase();
            const x = 15 + i * 20;  // 文字在canvas上的x坐标
            const y = 16 + customFloor(15); // 文字在canvas上的y坐标
            const fontFinallSize = customFloor(fontMaxSize - fontMinSize) + fontMinSize;
            const fontVariant = fonts[customFloor(fontLength)];
            context.font = "bold" + ` ${fontFinallSize}px ` + fontVariant;
            // Canvas 的左上角是(0，0), 基于左上角往右 X 为正，往下 Y 为正，反之为负 
            // 1、
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);

            context.rotate(-deg);
            context.translate(-x, -y);
            // 相当于回到原点(0, 0)
            // 你也可以直接context.fillText(txt, x, y), 只不过没旋转角度;

            // 2、 save, restore保存和恢复原状态
            // context.save();
            // context.translate(x, y);
            // context.rotate(deg);
            // context.fillStyle = randomColor();
            // context.fillText(txt, 0, 0);
            // context.restore();
        }
        for (var i = 0; i <= 5; i++) {  // 验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }

        for (let i = 0; i <= 40; i++) {  // 验证码上显示小点
            context.beginPath();
            const x = customFloor(canvas_width);
            const y = customFloor(canvas_height);
            context.arc(x, y, 1, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = randomColor();
            context.fill();
        }
        console.log(show_num.join(''))
        changeCode(show_num.join(''))
    }

    const randomColor = () => {
        var r = customFloor(256);
        var g = customFloor(256);
        var b = customFloor(256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    const handleCanvasClick = () => {
        onRraw();
        triggerChange('');
    }

    const triggerChange = value => {
        if (onChange) {
            onChange(value);
        }
    };

    const handleInputChange = e => {
        const { value } = e.target;
        setValue(value);
        triggerChange(value);
    };

    return (
        <Input.Group compact>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                className='input'
                placeholder='请输入验证码,点击图片切换'
            />
            <canvas
                onClick={handleCanvasClick}
                className='canvas'
                ref={codeRef}
                width={100}
                height={30}
            >
                您的浏览器不支持canvas标签, 请先升级浏览器的版本
            </canvas>
        </Input.Group>
    )
}

CodeInput.propTypes = {
    onChange: PropTypes.func,
    form: PropTypes.any.isRequired,
    changeCode: PropTypes.func.isRequired,
    refresh: PropTypes.number.isRequired,
}

CodeInput.defaultProps = {

}

export default CodeInput;
