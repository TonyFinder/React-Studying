import React from 'react';
import d from './../Dialogs.module.css';

type MessageItemPropsType = {
    message: string
}

export const Message: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={d.messageItem}>
            {props.message}
        </div>
    )
}