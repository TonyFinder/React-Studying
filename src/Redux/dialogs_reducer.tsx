import {ActionPropsType, dialogsPagePropsType} from './Store';

export const newMessageAC = (message: string) => ({type: "NEW-MESSAGE-TEXT", message: message} as const)
export const addNewMessageAC = () => ({type: "ADD-MESSAGE"} as const)

export const dialogReducer = (state: dialogsPagePropsType, action: ActionPropsType) => {
    switch (action.type) {
        case 'NEW-MESSAGE-TEXT':
            state.newMessage = action.message
            return state
        case 'ADD-MESSAGE':
            state.messages.push({id: state.messages.length + 1, message: state.newMessage, iTalk: true})
            state.newMessage = ""
            return state
        default:
            return state
    }
}