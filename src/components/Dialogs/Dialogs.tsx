import React from 'react';
import d from './Dialogs.module.css';
import {DialogItems, DialogItemsPropsType} from './DialogItems/DialogItems';
import {Message} from './Message/Message';

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
                {messages.map(messages => <Message message={messages.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs