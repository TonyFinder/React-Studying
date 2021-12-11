import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, UsersPagePropsType} from '../../Redux/users_reducer';

export type MapStateToPropsType = {
    usersPage: UsersPagePropsType
}
export type MapDispatchToPropsType = {
    followClick: (userId: number) => void
    setUsersHandler: (users: UsersPagePropsType) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followClick: (userId: number) => dispatch(followAC(userId)),
        setUsersHandler: (users: UsersPagePropsType) => dispatch(setUsersAC(users))
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)