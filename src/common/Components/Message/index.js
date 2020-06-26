import { message } from 'antd';

// success message弹窗
export const MsgSuccess = data => {
    message.success(data);
}

// info message弹窗
export const MsgInfo = data => {
    message.info(data);
}

// error message弹窗
export const MsgError = data => {
    message.error(data);
}

// warn message弹窗
export const MsgWarn = data => {
    message.warning(data);
}

// loading message弹窗
export const MsgLoading = data => {
    message.loading(data);
}

// 一般用在更新成功之后
const key = 'updatable';
export const MsgUpdateSuccess = ({ 
    loading, content,
    duration = 2, timeOut = 1000, 
}) => {
    message.loading({ loading, key });
    setTimeout(() => {
        message.success({ content, key, duration, }, timeOut);
    })
}