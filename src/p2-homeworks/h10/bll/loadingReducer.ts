
type initStateType = typeof initState

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ActionLoadingType): initStateType => { // fix any
    switch (action.type) {
        case "LOADING_TRUE":
            return {
                ...state, isLoading: action.isLoading
            }
        default: return state
    }
}

export type ActionLoadingType = {
    type: "LOADING_TRUE",
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): ActionLoadingType => {
    return{
        type: "LOADING_TRUE",
        isLoading
    }
}
