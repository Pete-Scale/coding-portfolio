import React from 'react'
import './home.css'
import headshot from '../../assets/images/about-me_page/headshot.jpg'

const Home = () => (
  <section className="row mt-5 pt-4">
    <div className="col-md-12 profileFontChange">
      <img src={headshot} className="rounded-circle float-left img-fluid mr-3 profileImageSize" alt="Profile Pic"/>
      <p>My name is Pete Scale and I am a part-time student at Northwestern University undergoing their Full Stack Coding Bootcamp. Currently I am an A student and look forward to continuing to push myself to achieve a high standard of excellence.</p>
      <p>As a part time student my main job at the moment is as a professional stunt man. I have most recently been on episodes of the Chicago filmed shows <em>Empire</em>, <em>Fargo</em> and <em>Chicago P.D.</em> earlier this year.</p>
      <p>My hometown is Downers Grove, IL, a suburb of Chicago. A while ago I moved out to Los Angeles to try my hand at stunt work and acting. After several years of modest success in L.A. I moved back to Chicago to live with my now fiancé in Bolingbrook, IL. Not wanting to stop working in film, I decided to see if I could continue being a stunt man in my home city.</p>
      <p>Soon after I moved back the COVID-19 pandemic struck and everything grinded to a halt. Despite that, I eventually did get work once safety precautions were in place. However things being so uncertain had spooked me enough that I decided to take up a new part-time career in computer programming! I now look forward to being a full stack web developer and flexing my creative muscles through coding instead of jumping off buildings and lighting myself on fire! Having a career that gives me a steady source of income and allows me the freedom and safety to work from home if need be will be a welcomed change. Check out my Portfolio page to see what projects I've done and check out my Contact page to get in touch with me directly.</p>
      <p>After everything this crazy journey has brought me back to my home city, living with my fiancé, and ready to start a brand new career in web development to build a bright future for myself and my family. Cheers, lets code!</p>
    </div>
  </section>
)

export default Home