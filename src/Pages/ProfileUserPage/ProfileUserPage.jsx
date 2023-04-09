import React from 'react'
import './ProfileUserPage.scss'
import Header from "../../Components/Header/Header";
import ProfileUserContent from "../../Components/ProfileUserContent/ProfileUserContent";
function ProfileUserPage() {
    return (
        <div className='ProfilePage'>
            <Header />
            <ProfileUserContent/>
        </div>
    )
}

export default ProfileUserPage