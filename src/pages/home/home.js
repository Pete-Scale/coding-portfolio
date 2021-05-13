import React from 'react'
import './home.css'
import headshot from '../../assets/images/about-me_page/headshot.jpg'

const Home = () => (
  <section className="row mt-4 show">
    <div className="col-lg-3">
      <img src={headshot} className="rounded-circle img-fluid mr-3 profileImage" alt="Profile Pic"/>
    </div>
    <div className="col-lg-9 profileFont">
      <p>My name is Pete Scale and I just graduated from Northwestern University School of Professional Studies completing their Full Stack Web Development Coding Boot Camp.</p>
      <p>My main job has been as a professional stunt man. I have most recently been on episodes of the Chicago filmed shows <em>Empire</em>, <em>Fargo</em> and <em>Chicago P.D.</em></p>
      <p>My hometown is Downers Grove, IL, a suburb of Chicago. A while ago I moved out to Los Angeles to try my hand at stunt work and acting. After several years of modest success in L.A. I moved back to Chicago to live with my now fiancé in Bolingbrook, IL. Not wanting to stop working in film, I decided to see if I could continue being a stunt man in my home city.</p>
      <p>Soon after I moved back the COVID-19 pandemic struck and everything grinded to a halt. Despite that, I eventually did get work once safety precautions were in place. However things being so uncertain had spooked me enough that I decided to take up a new career in computer programming! I am excited to get into web developement where I can flex my creative muscles through coding instead of jumping off buildings and lighting myself on fire!</p> 
      <p>I am definitely looking forward to having a career that gives me a steady source of income and allows me the freedom and safety to work from home if need be will be a welcomed change. Check out my Portfolio page to see what projects I've done and check out my Contact page to get in touch with me directly.</p>
    </div>
  </section>
)

export default Home