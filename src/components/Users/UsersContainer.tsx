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
    componentDidMount() {this.props.getUsersTC(this.props.pageSize, this.props.currentPage)}
    setCurrentPage = (currentPage: number) => {this.props.setCurrentPageForUsersTC(this.props.pageSize, currentPage)}

    render() {
        return !this.props.isFetch
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
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        toggledButton: state.usersPage.toggledButton
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    getUsersTC,
    setCurrentPageForUsersTC,
    followButtonTC
})(UsersAPI)