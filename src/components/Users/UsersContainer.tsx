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
import React from 'react';
import axios, {AxiosResponse} from 'axios';

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

// Здесь используем классовый компонент, смотреть урок 53
export class UsersAPI extends React.Component<UsersPropsType, UsersPagePropsType> {
    componentDidMount() {
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.setUsersHandler(response.data)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then((response: AxiosResponse) => this.props.setUsersHandler(response.data))
    }

    render() {
        return <Users usersPage={this.props.usersPage}
                      currentPage={this.props.currentPage}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      setCurrentPage={this.setCurrentPage}
                      followClick={this.props.followClick}
        />
    }
}

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)