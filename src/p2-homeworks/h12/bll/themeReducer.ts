
type InitStateType = {
    theme: string
 }

const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.value
            }
        }
        default: return state;
    }
};

type ChangeThemeActionType = {
    type: "CHANGE_THEME",
    value: string
}

export const changeThemeAC = (value: string ): ChangeThemeActionType => ({type: "CHANGE_THEME", value}); // fixed any