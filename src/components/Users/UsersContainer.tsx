import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../Redux/redux-store';
import {
    followButtonTC,
    getUsersTC,
    setCurrentPage,
    setCurrentPageForUsersTC,
    UsersPagePropsType
} from '../../Redux/users_reducer';
import React from 'react';
import {Loading} from '../common/Loading/Loading';
import {
    getCurrentPage,
    getPageSize,
    getToggledButton,
    getTotalUsersCount,
    getUsersPage,
    isFetch
} from '../../Redux/users-selectors';

type MapStateToPropsType = {
    usersPage: UsersPagePropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetch: boolean
    toggledButton: number[]
}
type MapDispatchToPropsType = {
    getUsersTC: (pageSize: number, currentPage: number) => void
    setCurrentPageForUsersTC: (pageSize: number, currentPage: number) => void
    followButtonTC: (userID: number, followed: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// Здесь используем классовый компонент, смотреть урок 53
export class UsersAPI extends React.Component<UsersPropsType, UsersPagePropsType> {
    componentDidMount = () => this.props.getUsersTC(this.props.pageSize, this.props.currentPage)
    setCurrentPage = (currentPage: number) => this.props.setCurrentPageForUsersTC(this.props.pageSize, currentPage)

    render = () => !this.props.isFetch
        ? <Users usersPage={this.props.usersPage}
                 currentPage={this.props.currentPage}
                 pageSize={this.props.pageSize}
                 totalUsersCount={this.props.totalUsersCount}
                 setCurrentPage={this.setCurrentPage}
                 toggledButton={this.props.toggledButton}
                 followButtonTC={this.props.followButtonTC}
        />
        : <Loading/>
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
        usersPage: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetch: isFetch(state),
        toggledButton: getToggledButton(state)
})

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    getUsersTC,
    setCurrentPageForUsersTC,
    followButtonTC
})(UsersAPI)