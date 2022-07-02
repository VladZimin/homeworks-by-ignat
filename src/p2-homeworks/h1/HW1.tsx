import React, {useState} from 'react'
import Message from './Message'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'

const initialState = [{
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Vlad',
    message: 'Hello!!!',
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
}]
type UseStateType = Array<MessagesType>

export type MessagesType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function HW1() {

    let [messages, setMessages] = useState<UseStateType>(initialState)
    let [inputValue, setInputValue] = useState<string>('')

    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onClickSend = () => {
        const date = new Date()
        if (inputValue.trim() !== '') {
            setMessages(prevState => [...prevState, {
                avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                name: 'Vlad',
                message: inputValue.trim(),
                time: `${date.getHours()}:${date.getMinutes()}`,
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
                messages.map((messageObj, index) => <Message key={index} {...messageObj}/>)
            }
            <SuperInputText onChange={onChangeInput} type="text" value={inputValue} placeholder="Введите сообщение..."/>
            <SuperButton onClick={onClickSend}>отправить</SuperButton>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
