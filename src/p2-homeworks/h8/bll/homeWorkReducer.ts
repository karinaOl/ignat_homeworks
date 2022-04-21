import {UserType} from "../HW8";



type homeWorkReducerAC = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

const sortAC = (direction: string) => {
    return{
        type: 'sort',
        payload: direction
    }as const
}

const checkAC = (age:number) => {
    return{
        type: 'check',
        payload: age

    }as const
}


export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerAC): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a,b)=> a.name <= b.name ? -1 : 1)
                : [...state].sort((a,b)=> b.name <= a.name ? -1 : 1)
        }
        case 'check': {
            return state.filter(u=> u.age > action.payload)
        }
        default: return state
    }
}