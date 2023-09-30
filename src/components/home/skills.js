import React from 'react'
import skillsimg from '../json/skills.json'
function Skills() {
  return (
    <>
    <section className='section_3'>
      <div className="container">
      <div className="outer">
            <div className="button">
              <div className="text-num1">skills</div>
            </div>
          </div>
      <div className='skills'>
        <h2>The skills, tools and technologies I am really good at:</h2>
      </div>
      <div class="grid-skills">
        {
          skillsimg.map((index,item)=>{
            return(
              <div class="grid-item">
                <img src={require(`../image/${index["images"]}`)} />
                <h3 className='skills-p'>{index["ptext"]}</h3>
              </div>
            )
          })
        }
      </div>
      </div>
    </section>
    </>
  )
}

export default Skills