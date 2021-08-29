import React from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {DialogItemsPropsType, messagesDataProps} from '../../index';

type DialogsProps = {
    dialogs: DialogItemsPropsType[]
    messages: messagesDataProps[]
}

const Dialogs = (props: DialogsProps) => {
    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={d.messages}>
                {props.messages.map(messages => <Message message={messages.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs