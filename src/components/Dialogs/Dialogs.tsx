import React from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {dialogsPagePropsType} from '../../Redux/State';

type DialogsProps = {
    dialogs: dialogsPagePropsType
}

const Dialogs = (props: DialogsProps) => {
    let textareaMessage = React.createRef<HTMLTextAreaElement>()

    const addMessageHandler = () => {
        alert(textareaMessage.current?.value)
    }

    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogs.dialogs.map(dialog => <DialogItems key={dialog.id} name={dialog.name} id={dialog.id} image={dialog.image}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogs.messages.map(messages => <Message key={messages.id} message={messages.message} iTalk={messages.iTalk}/>)}
                <textarea ref={textareaMessage}></textarea>
                <button onClick={addMessageHandler}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs