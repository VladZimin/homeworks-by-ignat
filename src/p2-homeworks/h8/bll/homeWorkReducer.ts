import {UserType} from '../HW8'

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionsType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortArray = [...state].sort((a, b) => a.name.localeCompare(b.name))
            return action.payload === 'up' ? sortArray : sortArray.reverse()
        }
        case 'check': {
            return state.filter(obj => obj.age >= action.payload)
        }
        default:
            return state
    }
}