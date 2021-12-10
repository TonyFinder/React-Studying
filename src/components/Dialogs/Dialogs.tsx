import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';

const Dialogs = (props: DialogsPropsType) => {
    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessageHandler(e)
    const addMessageHandler = () => props.addMessageHandler()

    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogsPage.dialogs.map(dialog => <DialogItems key={dialog.id} name={dialog.name} id={dialog.id}
                                                                  image={dialog.image}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogsPage.messages.map(messages => <Message key={messages.id} message={messages.message}
                                                                 iTalk={messages.iTalk}/>)}
                <div className={d.newTextArea}>
                    <div>
                        <textarea placeholder={'Enter your message'}
                                  value={props.dialogsPage.newMessage}
                                  onChange={changeMessageHandler}/>
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs