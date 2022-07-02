import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const errorMsg = error ? 'Введите имя...' : ''
    const btnMsg = error ? ':(' : ':)'
    return (<div>
        <SuperInputText value={name} onChange={setNameCallback} className={`${s.addUserInput} ${inputClass}`}/>
        <SuperButton onClick={addUser} className={s.addUserBtn} disabled={error}>{btnMsg}</SuperButton>
        <span className={s.totalPrice}>Added users: {totalUsers}</span>
        <div>
            <span className={s.errorMsg}>{errorMsg}</span>
        </div>
    </div>)
}

export default Greeting
