import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './../Dialogs.module.css';

export type DialogItemsPropsType = {
    name: string
    id: number
}

export const DialogItems: React.FC<DialogItemsPropsType> = (props) => {
    return (
        <div className={`${d.dialogItem} ${d.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}