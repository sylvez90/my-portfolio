import React from 'react'
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {BiLogoTwitter} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Top Star Tech</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><BiLogoFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter.com"><BiLogoTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Top Star Tech. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer