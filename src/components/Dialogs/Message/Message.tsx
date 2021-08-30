import React from 'react';
import m from './Message.module.css'

type MessageItemPropsType = {
    message: string
    iTalk: boolean
}

export const Message = (props: MessageItemPropsType) => {
    {
        if (props.iTalk) return (
            <div className={m.positionMy}>
                {props.message}
                <img src={"https://omoro.ru/wp-content/uploads/2018/05/prikilnie-kartinki-na-avatarky-dlia-devyshek-48.jpg"}/>
            </div>
        )
    }
    return (
        <div className={m.positionYou}>
            <img src={"https://www.blast.hk/attachments/68493/"}/>
            {props.message}
        </div>
    )
}