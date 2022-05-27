import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img className={s.avatarImg} src={props.avatar} alt="Avatar"/>
            <div className={s.messageBlock}>
                <div className={s.userName}>{props.name}</div>
                <div className={s.userMessage}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
