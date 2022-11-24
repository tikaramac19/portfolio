import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://linkedin.com" target='_blank'><BsGithub /></a>
        <a href="https://linkedin.com" target='_blank'><BsFacebook /></a>
        {/* <a href="https://linkedin.com" target='_blank'></a> */}
        
    </div>
  )
}

export default HeaderSocials