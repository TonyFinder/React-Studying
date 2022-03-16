import {ChangeEvent} from 'react';
import {addNewMessageAC, InitialStateDialogsType, newMessageAC} from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';

// Нужно типизировать то, что mapStateToProps возвращает
export type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    changeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addMessageHandler: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeMessageHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newMessageAC(e.currentTarget.value))
        },
        addMessageHandler: () => {
            dispatch(addNewMessageAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer