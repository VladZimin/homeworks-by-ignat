type StateType = {
    loading: boolean
}

type ActionType = ReturnType<typeof loadingAC>

const initState: StateType = {
    loading: false
}

export const loadingReducer = (state = initState, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {loading: action.payload}
        }
        default:
            return state
    }
}

export const loadingAC = (payload: boolean) => ({type: 'SET_LOADING', payload} as const)