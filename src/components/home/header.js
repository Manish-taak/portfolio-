import React from 'react'
import image1 from '../image/fbf5ce_64c10370746c4aeaa15682685b450f1b~mv2.webp'
import location from '../image/64665.png'
import twiter from '../image/pngtree-twitter-social-media-round-icon-png-image_6315985.png'
import github from '../image/download.png'
import figma from '../image/download (1).png'
function Header() {
  return (
    <>
    <header>
        <div className="container">
            <div className="header_start">
                <h2 >Manish</h2>
                <div className="navbar">
                    <ul>
                    <li><a  className='cool-link' href="#">Home</a></li>
                        <li><a  className='cool-link' href="#">about</a></li>
                        <li><a className='cool-link' href="#">work</a></li>
                         <li><a className='cool-link' href="#">skills</a></li>
                       
                        <li><a className='cool-link'  href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
           <section className='section_1 container'>
                <div className="hero-section">
                    <div className="text-hero">
                        <h1>Hi, I'm Manish</h1>
                        <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                    </div>
                    <div className="image-part">
                        <img src={image1}/>
                    </div>
                </div>

                <div className="address">
                    <div className="address-img">
                        <img  className='location-image' src={location } /> 
                       <h3>Rajasthan,india</h3>
                    </div>
                    <div className="contact-list">
                        <img className='contact-img' src={twiter} />
                        <img className='contact-img' src={github} />
                        <img className='contact-img' src={figma} />
                    </div>
                </div>
           </section>
    </>
  )
}

export default Header
