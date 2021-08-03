import React from 'react';
import p from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455__480.jpg' alt='picture'/>
        </div>
        <div className={p.description}>
            Ava + description
        </div>
    </div>
}

export default ProfileInfo;