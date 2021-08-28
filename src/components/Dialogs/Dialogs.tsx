import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './Dialogs.module.css';

type DialogItemsPropsType = {
    name: string
    id: number
}

const DialogItems: React.FC<DialogItemsPropsType> = (props) => {
    return (
        <div className={`${d.dialogItem} ${d.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemPropsType = {
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={d.messageItem}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {

    let dialogs: DialogItemsPropsType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    type messagesDataProps = {
        id: number
        message: string
    }

    let messages: messagesDataProps[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={d.messages}>
                {messages.map(messages => <MessageItem message={messages.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs