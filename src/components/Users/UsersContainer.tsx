import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../Redux/redux-store';
import {
    follow,
    isFetching,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    UsersPagePropsType
} from '../../Redux/users_reducer';
import React from 'react';
import axios, {AxiosResponse} from 'axios';
import {Loading} from '../common/Loading/Loading';

export type MapStateToPropsType = {
    usersPage: UsersPagePropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetch: boolean
}
export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    setUsers: (users: UsersPagePropsType) => void
    setCurrentPage: (users: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// Здесь используем классовый компонент, смотреть урок 53
export class UsersAPI extends React.Component<UsersPropsType, UsersPagePropsType> {
    componentDidMount() {
        this.props.isFetching(true)
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.isFetching(false)
                this.props.setUsers(response.data)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        this.props.isFetching(true)
        this.props.setCurrentPage(currentPage)
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.isFetching(false)
                this.props.setUsers(response.data)
            })
    }

    render() {
        return !this.props.isFetch
            ? <Users usersPage={this.props.usersPage}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     totalUsersCount={this.props.totalUsersCount}
                     setCurrentPage={this.setCurrentPage}
                     followClick={this.props.follow}/>
            : <Loading/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch
    }
}

export const UsersContainer = connect(mapStateToProps, {follow, setUsers, setCurrentPage, setTotalUsersCount, isFetching})(UsersAPI)