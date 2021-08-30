import React from 'react';
import d from './Dialogs.module.css';
import {DialogItems} from './DialogItems/DialogItems';
import {Message} from './Message/Message';
import {dialogsPagePropsType} from '../../Redux/State';

type DialogsProps = {
    dialogs: dialogsPagePropsType
}

const Dialogs = (props: DialogsProps) => {
    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                {props.dialogs.dialogs.map(dialog => <DialogItems name={dialog.name} id={dialog.id} image={dialog.image}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogs.messages.map(messages => <Message message={messages.message} iTalk={messages.iTalk}/>)}
            </div>
        </div>
    )
}

export default Dialogs