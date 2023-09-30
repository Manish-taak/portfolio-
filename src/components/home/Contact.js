import React from 'react'
import message from '../image/message.jpg'
import phonenumber from '../image/unnamed.webp'
import twiter from '../image/pngtree-twitter-social-media-round-icon-png-image_6315985.png'
import github from '../image/download.png'
import figma from '../image/download (1).png'
function Contact() {
  return (
    <>
      <section className='section_4'>
        <div className="container">

          <div className="outer">
            <div className="button">
              <div className="text-num1">Get in touch</div>
            </div>
          </div>



          <div className="contact-section">
            <div>
              <h2 className='text-contact'>What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</h2>
            </div>
            <div className='message-img-part'>
              <ul>
                <li>
                  <img className='message-phone' src={message} />
                  <h2>
                    manishtaak@gmail.com
                  </h2>
                </li>
                <li>
                  <img className='message-phone' src={phonenumber} />
                  <h2>
                    8829860158
                  </h2>
                </li>
              </ul>
            </div>
            <div className='contact-last' >
              <h3>You may also find me on these platforms!</h3>
              <div className="twiter">
                <img className='contact-img'src={github}/>
                <img className='contact-img' src={figma}/>
                <img className='contact-img' src={twiter}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact