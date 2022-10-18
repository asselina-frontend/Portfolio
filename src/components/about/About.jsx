import React from 'react'
import './about.css'
import MINE from '../../assets/mine-about.jpg'
import { FaAward } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MINE} alt='About' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>10+ Years Working in finance and accounting</small>{' '}
              <br></br>
              <small>1+ Years Working in IT field</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>1+ Completed Commercial Project</small> <br></br>
              <small>20+ Pet Projects</small>
            </article>

            <article className='about__card'>
              <GiCommercialAirplane className='about__icon' />
              <h5>Hobbies</h5>
              <small>10+ countries I have visited</small>
            </article>
          </div>
          <p>
            I'm an enthusiastic and detail-oriented Frontend Software Engineer
            seeking an entry-level position with Company to use my skills in
            coding, troubleshooting complex problems, and assisting in the
            timely completion of projects.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
