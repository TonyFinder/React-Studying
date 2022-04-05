import React from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {DialogForm} from './DialogMessageForm';

const Dialogs = (props: DialogsPropsType) => {
    const addMessageHandler = (newMessage: string) => props.addMessageHandler(newMessage)

    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogsPage.dialogs.map(dialog => <DialogItems key={dialog.id} name={dialog.name} id={dialog.id}
                                                                      image={dialog.image}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogsPage.messages.map(messages => <Message key={messages.id} message={messages.message}
                                                                     iTalk={messages.iTalk}/>)}
                <DialogForm addMessage={addMessageHandler}/>
            </div>
        </div>
    )
}

export default Dialogs