import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    isFetchingAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
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
    isFetching: boolean
}
export type MapDispatchToPropsType = {
    followClick: (userId: number) => void
    setUsersHandler: (users: UsersPagePropsType) => void
    setCurrentPage: (users: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetchingSet: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

// Здесь используем классовый компонент, смотреть урок 53
export class UsersAPI extends React.Component<UsersPropsType, UsersPagePropsType> {
    componentDidMount() {
        this.props.isFetchingSet(true)
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.isFetchingSet(false)
                this.props.setUsersHandler(response.data)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    setCurrentPage = (currentPage: number) => {
        this.props.isFetchingSet(true)
        this.props.setCurrentPage(currentPage)
        axios
            .get<any>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then((response: AxiosResponse) => {
                this.props.isFetchingSet(false)
                this.props.setUsersHandler(response.data)
            })
    }

    render() {
        return !this.props.isFetching
            ? <Users usersPage={this.props.usersPage}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     totalUsersCount={this.props.totalUsersCount}
                     setCurrentPage={this.setCurrentPage}
                     followClick={this.props.followClick}/>
            : <Loading/>
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followClick: (userId: number) => dispatch(followAC(userId)),
        setUsersHandler: (users: UsersPagePropsType) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        isFetchingSet: (isFetching: boolean) => dispatch(isFetchingAC(isFetching)),
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)