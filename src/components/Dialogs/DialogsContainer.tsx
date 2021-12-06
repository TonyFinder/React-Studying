import React, {ChangeEvent} from 'react';
import {ActionDialogPropsType, addNewMessageAC, DialogsPagePropsType, newMessageAC} from '../../Redux/dialogs_reducer';
import Dialogs from './Dialogs';

type DialogsContainerProps = {
    dialogs: DialogsPagePropsType
    dispatch: (action: ActionDialogPropsType) => void
}

const DialogsContainer = (props: DialogsContainerProps) => {
    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {props.dispatch(newMessageAC(e.currentTarget.value))}
    const addMessageHandler = () => {props.dispatch(addNewMessageAC())}

    return <Dialogs dialogs={props.dialogs} addMessageHandler={addMessageHandler} changeMessageHandler={changeMessageHandler}/>
}

export default DialogsContainer