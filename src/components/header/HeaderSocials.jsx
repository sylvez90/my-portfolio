import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com/sylvez90" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com" target='_blank'><BsGithub/></a>
     

    </div>
  )
}

export default HeaderSocials