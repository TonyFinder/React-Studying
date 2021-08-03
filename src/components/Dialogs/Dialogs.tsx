import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './Dialogs.module.css';

type DialogItemsPropsType = {
    name: string
    id: string
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

const MessageItem:React.FC<MessageItemPropsType> = (props) => {
    return (
        <div className={d.messageItem}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                <DialogItems name="Dimych" id="1"/>
                <DialogItems name="Andrey" id="2"/>
                <DialogItems name="Sveta" id="3"/>
                <DialogItems name="Sasha" id="4"/>
                <DialogItems name="Viktor" id="5"/>
                <DialogItems name="Valera" id="6"/>
            </div>
            <div className={d.messages}>
                <MessageItem message="Hi"/>
                <MessageItem message="How is your it-kamasutra?"/>
                <MessageItem message="Yo"/>
                <MessageItem message="Yo"/>
                <MessageItem message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs