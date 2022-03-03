import React from 'react'
import s from './Message.module.css'

type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string

}


function Message(props: MessageProps) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.content}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message;
