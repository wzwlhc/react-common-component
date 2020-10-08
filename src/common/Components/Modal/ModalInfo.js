import React from 'react';
import { Modal } from 'antd';
import ReactDOM from 'react-dom';

const Dialog = props => {
    const {
        content, createDiv,
        afterClose,
        ...resProps
    } = props;
    return (
        <Modal
            footer={null}
            afterClose={afterClose}
            getContainer={() => createDiv}
            {...resProps}
        >
            {content}
        </Modal>
    )
}
const ModalInfo = config => {
    const createDiv = document.createElement('div');
    document.body.appendChild(createDiv);
    const currentConfig = {
        width: 1200,
        ...config,
        createDiv,
        onCancel: close,
        visible: true,
        afterClose: destroy,
    };

    function close() {
        console.log('close');
        render({
            ...currentConfig,
            visible: false,
        });
    }

    function destroy() {
        console.log('afterClose');
        document.body.removeChild(createDiv);
    }

    function update(updateProps) {
        render({
            ...currentConfig,
            ...updateProps,
        });
    }

    const render = renderProps => {
        ReactDOM.render(<Dialog {...renderProps} />, createDiv);
    }
    render(currentConfig);
    return {
        update, close,
    }
}
export default ModalInfo;