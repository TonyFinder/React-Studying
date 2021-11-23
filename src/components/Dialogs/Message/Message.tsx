import React from 'react';
import m from './Message.module.css'

type MessageItemPropsType = {
    message: string
    iTalk: boolean
}

export const Message = (props: MessageItemPropsType) => {

    return (
        <div className={props.iTalk ? m.positionMy : m.positionYou}>
            {props.iTalk ? props.message : ""}
            <img alt="avatar" src={props.iTalk ? "https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg" : "https://www.blast.hk/attachments/68493/"}/>
            {props.iTalk ? '' : props.message}
        </div>
    )
}