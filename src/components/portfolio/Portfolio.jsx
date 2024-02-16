import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
import IMG5 from '../../assets/port5.png'
import IMG6 from '../../assets/port6.png'


const data = [ 
  { 
    id: 1,
    image: IMG1,
    title: 'Web App Game',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/Pig-Game'
  },
  { 
    id: 2,
    image: IMG2,
    title: 'Social Media Platform with Theme Customization',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/social-media'
  },
  { 
    id: 3,
    image: IMG3,
    title: 'Educational website',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/Top-Star-Tech'
  },
  { 
    id: 4,
    image: IMG4,
    title: 'Admin Dashboard',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/bithale'
  },
  { 
    id: 5,
    image: IMG5,
    title: 'Social Media Platform with Theme Customization',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/social-media'
  },
  { 
    id: 6,
    image: IMG6,
    title: 'Professional-looking Fashion Hub',
    github: 'https://github.com/sylvez90',
    demo: 'https://sylvez90.github.io/dgabrielsempire'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
       { 
        data.map(({id, image, title, github, demo}) => { 
          return ( 
            <article key={id} className='portfolio_item'>
            <div className="portfolio_item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Visit Site</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio