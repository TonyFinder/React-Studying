import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './../Dialogs.module.css';

type DialogItemsProps = {
    name: string
    id: number
}

export const DialogItems = (props: DialogItemsProps) => {

    return (
        <div className={`${d.dialogItem} ${d.active}`}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}