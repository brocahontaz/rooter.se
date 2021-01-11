import React from 'react'
import './Profile.css'
import ProfilePicture from 'assets/profile1.png'
import ProfilePictureHover from 'assets/profile2.png'
import ProfilePictureClick from 'assets/profile3.png'

const Profile = () =>
  <div className='Profile'>
    <img src={ProfilePicture} alt='profile' className='ProfilePicture' 
    onMouseEnter={e => e.target.src=ProfilePictureHover} 
    onMouseLeave={e => e.target.src=ProfilePicture}
    onClick={e => e.target.src=ProfilePictureClick}/>
  </div>

export default Profile