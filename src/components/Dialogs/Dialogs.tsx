import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {ActionPropsType, dialogsPagePropsType} from '../../Redux/Store';
import {addNewMessageAC, newMessageAC} from '../../Redux/dialogs_reducer';

type DialogsProps = {
    dialogs: dialogsPagePropsType
    dispatch: (action: ActionPropsType) => void
}

const Dialogs = (props: DialogsProps) => {
    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {props.dispatch(newMessageAC(e.currentTarget.value))}
    const addMessageHandler = () => {props.dispatch(addNewMessageAC())}

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