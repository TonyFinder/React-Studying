import React from 'react'
import styles from './Users.module.css';
import userPhoto from '../../Assets/Images/user.jpg';
import {UsersPagePropsType} from '../../Redux/users_reducer';
import {NavLink} from 'react-router-dom';
import axios, {AxiosResponse} from 'axios';


type UsersPresentationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: UsersPagePropsType
    setCurrentPage: (page: number) => void
    followClick: (id: number) => void
}

export const Users = (props: UsersPresentationPropsType) => {
    let counter = []
    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) counter.push(i)

    return (
        <div>
            {
                counter.map(page => <span key={Math.random()}
                                          className={props.currentPage === page ? styles.boldText : ''}
                                          onClick={() => props.setCurrentPage(page)}>{page} </span>)
            }
            <div className={styles.main}>
                {props.usersPage.items.map(m =>
                    <div className={styles.usersBlocks} key={m.id}>
                        <div className={styles.imageBlock}>
                            {/*Ссылка на страницу Profile*/}
                            <NavLink to={`/profile/${m.id}`}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.image}
                                     alt={'User avatar'}/>
                            </NavLink>
                            <button
                                onClick={() => {
                                    if (m.followed) {
                                        axios
                                            .delete<any>(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '7c15e34d-028e-4653-86ec-6c53c32699db'
                                                    }
                                                })
                                            .then((response: AxiosResponse) => {
                                                console.log("DELETE")
                                                if (response.data.resultCode === 0) props.followClick(m.id)
                                            })
                                            .catch((error: AxiosResponse) => console.log("Error button", error))
                                    } else {
                                        axios
                                            .post<any>(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '7c15e34d-028e-4653-86ec-6c53c32699db'
                                                    }
                                                })
                                            .then((response: AxiosResponse) => {
                                                console.log("POST")
                                                if (response.data.resultCode === 0) props.followClick(m.id)
                                            })
                                            .catch((error: AxiosResponse) => console.log("Error button", error))
                                    }
                                }}>{m.followed ? 'Follow' : 'Unfollow'}
                            </button>
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