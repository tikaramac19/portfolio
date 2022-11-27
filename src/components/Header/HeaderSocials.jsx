import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/tikaram-ac-91ab471b4/"  target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/tikaramac19/" target='_blank'><BsGithub /></a>
        <a href="https://www.facebook.com/tikaram.acharya.7927/" target='_blank'><BsFacebook /></a>
        {/* <a href="https://linkedin.com" target='_blank'></a> */}
        
    </div>
  )
}

export default HeaderSocials