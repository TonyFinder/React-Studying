import {ComponentType} from 'react';
import {addNewMessageAC, InitialStateDialogsType} from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

// Нужно типизировать то, что mapStateToProps возвращает
export type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType
}
export type MapDispatchToPropsType = {
    addMessageHandler: (newMessage: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessageHandler: (newMessage: string) => {
            dispatch(addNewMessageAC(newMessage))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)