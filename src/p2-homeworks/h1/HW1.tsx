import React, {useState} from 'react'
import Message from "./Message";

// const messageData = {
//     avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//     name: 'Some Name',
//     message: 'some text',
//     time: '22:00',
// }
type UseStateType = Array<MessagesType>

type MessagesType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function HW1() {

    let [messages, setMessages] = useState<UseStateType>([])
    let [inputValue, setInputValue] = useState<string>('')

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onClickSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, {
                avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                name: 'Some Name',
                message: inputValue.trim(),
                time: '22:00',
            }])
            setInputValue('')
        } else alert('Нужно что нибудь написать :)')

    }

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}
            {
                messages.map( (messageObj, index) => <Message key={index} {...messageObj}/>)
            }
            <input onChange={onChangeInput} type="text" value={inputValue}/>
            <button onClick={onClickSend}>отправить</button>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
