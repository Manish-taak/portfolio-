import React from 'react'
import image2 from '../image/ab102ed36f6a89e79e7fbb2dd2fc08b0.png'
const About = () => {
  return (
   <>
    <section className='section_2'>
      <div className="container">
      <div className="outer">
            <div className="button">
              <div className="text-num1">About</div>
            </div>
          </div>
        <div className="about-me">
          <div className="about-image">
            <img src={image2} />
          </div>
          <div className="about-me-text">
           <div>
           <h2>Curious about me? Here you have it:</h2>
           </div>

           <div className='intro-p' >
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am    enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect    design, and writing clear, readable, highly performant code matters to me.</p>
           </div>

           <div className='intro-p' >
                <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
           </div>

           <div className='intro-p' >
                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
           </div>
           <div className='intro-p' >
                <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
           </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default About
