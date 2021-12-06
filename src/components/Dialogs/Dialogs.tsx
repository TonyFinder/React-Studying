import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {DialogsPagePropsType} from '../../Redux/dialogs_reducer';

type DialogsProps = {
    dialogs: DialogsPagePropsType
    changeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addMessageHandler: () => void
}

const Dialogs = (props: DialogsProps) => {
    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.changeMessageHandler(e)
    const addMessageHandler = () => props.addMessageHandler()

    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogs.dialogs.map(dialog => <DialogItems key={dialog.id} name={dialog.name} id={dialog.id}
                                                                  image={dialog.image}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogs.messages.map(messages => <Message key={messages.id} message={messages.message}
                                                                 iTalk={messages.iTalk}/>)}
                <div className={d.newTextArea}>
                    <div>
                        <textarea placeholder={'Enter your message'}
                                  value={props.dialogs.newMessage}
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