import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../Assets/Images/user.jpg'
import {setCurrentPageAC, UsersPagePropsType} from '../../Redux/users_reducer';


// Здесь используем классовый компонент, смотреть урок 53
export class Users extends React.Component<UsersPropsType, UsersPagePropsType> {
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
        let counter = []
        for (let i = 1; i<=Math.ceil(this.props.totalUsersCount / this.props.pageSize); i++) counter.push(i)

        return (
            <div>
                {
                    counter.map(page => <span key={Math.random()} className={this.props.currentPage === page ? styles.boldText : ""} onClick={()=>this.setCurrentPage(page)}>{page} </span>)
                }
                <div className={styles.main}>
                    {this.props.usersPage.items.map(m =>
                        <div className={styles.usersBlocks}>
                            <div className={styles.imageBlock}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.image}
                                     alt={'User avatar'}/>
                                <button
                                    onClick={() => this.props.followClick(m.id)}>{m.followed ? 'Follow' : 'Unfollow'}</button>
                            </div>
                            <div className={styles.rightField}>
                                <div className={styles.upField}>
                                    <div>{m.name}</div>
                                    <div>
                                        <div>Russia,</div>
                                        <div>Moscow</div>
                                    </div>
                                </div>
                                <div className={styles.status}>{m.status}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}