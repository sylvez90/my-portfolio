import React from 'react'
import './about.css'
import SLY from '../../assets/SLY.jpg'
import {TbAwardFilled} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={SLY} alt="About Image" />
        </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <TbAwardFilled className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>I developed Ecommerce website, fashion website, Admin Dashboard. I cloned Facebook like web app with theme customization and many more web applications.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>  
  )
}

export default About