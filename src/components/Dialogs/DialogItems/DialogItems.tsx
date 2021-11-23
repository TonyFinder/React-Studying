import React from 'react';
import {NavLink} from 'react-router-dom';
import d from './DialogsItems.module.css'

type DialogItemsProps = {
    name: string
    id: number
    image: string
}

export const DialogItems = (props: DialogItemsProps) => {

    return (
        <div className={d.image}>
            <img alt="avatar" src={props.image}/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}