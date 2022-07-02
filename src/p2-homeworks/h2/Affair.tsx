import React from 'react'

import s from './Affairs.module.css'

import {AffairType} from './HW2'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    let priorityClass = s.highTask
    if (props.affair.priority === 'low') priorityClass = s.lowTask
    else if (props.affair.priority === 'middle') priorityClass = s.middleTask
    return (
        <div className={s.tasksBlock}>
            <span>{props.affair.name}</span>
            <span className={priorityClass}>{props.affair.priority}</span>
            <SuperButton onClick={deleteCallback} className={s.deleteTaskBtn}>X</SuperButton>
        </div>
    )
}

export default Affair
