import React from 'react';
import p from './ProfileInfo.module.css';
import {ProfilePropsType} from '../../../Redux/profile_reducer';
import {Loading} from '../../common/Loading/Loading';
import imageDefault from '../../../Assets/Images/user.jpg'

type ProfileInfoPropsType = {
    profilePage: ProfilePropsType
    isFetching: boolean
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return <div>
        <div className={p.image}>
            <img src='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__480.jpg' alt='avatar'/>
        </div>
        { !props.isFetching
            ?<div className={p.description}>
                <img src={props.profilePage.photos.small ? props.profilePage.photos.small : imageDefault} alt={"user"}/>
                <div>{props.profilePage.aboutMe}</div>
            </div>
            :<Loading/>
        }
    </div>
}

export default ProfileInfo;