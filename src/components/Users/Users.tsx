import React from 'react';
import {UsersPropsType} from './UsersContainer';
import styles from './Users.module.css'

export const Users = (props: UsersPropsType) => {
    return (
        <div className={styles.main}>
            {props.usersPage.users.map(m =>
                <div className={styles.usersBlocks}>
                    <div className={styles.imageBlock}>
                        <img src={m.image} className={styles.image} alt={"User avatar"}/>
                        <button onClick={() => props.followClick(m.id)}>{m.follow ? "Follow" : "Unfollow"}</button>
                    </div>
                    <div className={styles.rightField}>
                        <div className={styles.upField}>
                            <div>{m.name}</div>
                            <div>
                                <div>{`${m.location.country},`}</div>
                                <div>{m.location.city}</div>
                            </div>
                        </div>
                        <div className={styles.status}>{m.status}</div>
                    </div>
                </div>
            )}
        </div>
    )
}