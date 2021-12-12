import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'
import axios, {AxiosResponse} from 'axios';
import userPhoto from '../../Assets/Images/user.jpg'

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.items.length === 0) {
        axios
            .get<any>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: AxiosResponse) => props.setUsersHandler(response.data))
    }

    return (
        <div className={styles.main}>
            {props.usersPage.items.map(m =>
                <div className={styles.usersBlocks}>
                    <div className={styles.imageBlock}>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.image}
                             alt={'User avatar'}/>
                        <button onClick={() => props.followClick(m.id)}>{m.followed ? 'Follow' : 'Unfollow'}</button>
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
    )
}