import React from 'react';
import {NavLink} from 'react-router-dom';
import n from './Navbar.module.css';
import {SitebarPropsType} from '../../Redux/sitebar_reducer';

type NavbarPropsType = {
    sitebar: SitebarPropsType[]
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={n.navi}>
            <div className={n.item}>
                <NavLink to="/profile" activeClassName={n.active}>Profile</NavLink>
            </div>
            <div className={`${n.item} ${n.active}`}>
                <NavLink to="/dialogs" activeClassName={n.active}>Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/news" activeClassName={n.active}>News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="music" activeClassName={n.active}>Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="settings" activeClassName={n.active}>Settings</NavLink>
            </div>
            <div className={`${n.friends} ${n.friendsText}`}>
                <span className={n.header}>Friends</span>
                <div className={n.friendsColumn}>
                    {props.sitebar.map(friend =>
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