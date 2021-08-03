import React from 'react';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                <div className={`${d.dialogItem} ${d.active}`}>
                    Dimych
                </div>
                <div className={d.dialogItem}>
                    Andrey
                </div>
                <div className={d.dialogItem}>
                    Sveta
                </div>
                <div className={d.dialogItem}>
                    Sasha
                </div>
                <div className={d.dialogItem}>
                    Viktor
                </div>
                <div className={d.dialogItem}>
                    Valera
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.messageItem}>
                    Hi
                </div>
                <div className={d.messageItem}>
                    How is your it-kamasutra?
                </div>
                <div className={d.messageItem}>
                    Yo
                </div>
            </div>
        </div>
    )
}

export default Dialogs