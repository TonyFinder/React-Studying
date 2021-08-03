import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={d.allPageDialogs}>
            <div className={d.dialogs}>
                <div className={`${d.dialogItem} ${d.active}`}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={d.dialogItem}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={d.dialogItem}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={d.dialogItem}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={d.dialogItem}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
                <div className={d.dialogItem}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
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