import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersPagePropsType
} from '../../Redux/users_reducer';

export type MapStateToPropsType = {
    usersPage: UsersPagePropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToPropsType = {
    followClick: (userId: number) => void
    setUsersHandler: (users: UsersPagePropsType) => void
    setCurrentPage: (users: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followClick: (userId: number) => dispatch(followAC(userId)),
        setUsersHandler: (users: UsersPagePropsType) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)