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
import {Loading} from '../common/Loading/Loading';
import {usersAPI} from '../../api/api';

type MapStateToPropsType = {
    usersPage: UsersPagePropsType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetch: boolean
}
type MapDispatchToPropsType = {
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
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.isFetching(false)
                this.props.setUsers(data)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        this.props.isFetching(true)
        this.props.setCurrentPage(currentPage)
        usersAPI.getUsers(this.props.pageSize, currentPage)
            .then(data => {
                this.props.isFetching(false)
                this.props.setUsers(data)
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

export const UsersContainer = connect(mapStateToProps, {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    isFetching
})(UsersAPI)