import React from 'react';
import {NavLink} from 'react-router-dom';
import n from './Navbar.module.css';
import {SitebarPropsType} from '../../Redux/sitebar_reducer';

type NavbarPropsType = {
    sitebar: SitebarPropsType
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={n.navi}>
            <div className={n.item}>
                <NavLink to="/profile/21224" style={(param) => ({color: param.isActive ? "black" : "white"})}>Profile</NavLink>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to="/dialogs" style={(param) => ({color: param.isActive ? "black" : "white"})}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/users" style={(param) => ({color: param.isActive ? "black" : "white"})}>Users</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" style={(param) => ({color: param.isActive ? "black" : "white"})}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/music" style={(param) => ({color: param.isActive ? "black" : "white"})}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/settings" style={(param) => ({color: param.isActive ? "black" : "white"})}>Settings</NavLink>
            </div>
            <div className={`${n.friends} ${n.friendsText}`}>
                <span className={n.header}>Friends</span>
                <div className={n.friendsColumn}>
                    {props.sitebar.friends.map(friend =>
                        (<div key={friend.id}>
                                <img alt="avatar" src={friend.image}/>
                                <div className={n.friendsColumnText}>{friend.name}</div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;