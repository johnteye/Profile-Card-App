import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/fine-girl.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src= {profile_icon} alt="" />
            </div>    

        <div className="profile-title">Cirilla of Ciri</div>  
        <div className="profile-description">I am Princess Cirilla of Ciri. A young Princess with a lot on my shoulders, but I'm alright</div>

        <div className="profile-button"><a href="mailto:johnteyedoku@a2sv.org">Contact Me</a></div>
    </div>
  )
}

export default UserProfileCard
