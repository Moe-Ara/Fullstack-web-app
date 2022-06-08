import React from 'react'
import { Card } from '../../Reusables/Card/Card'
import './Homebody.css'


const Homebody = () => {
  return (
    <>
      <div className="body-container">
        <ul className="body-items">
          <li className="body-list-item"><Card imgsrc="/Images/code.png" text="Start Coding" subtext="learn python"
            backtext="So you want to Learn coding in python ?" backsubtext="Python is a scripting language that is often used in data science" /></li>
          <li className="body-list-item"><Card imgsrc="/Images/graphicdesign.png" text="Design Something" subtext="learn graphic design"
            backtext="So you want to Learn graphic design ?" backsubtext="graphic design" /></li>
          <li className="body-list-item"><Card imgsrc="/Images/pentesting.png" text="Start Pentesting" subtext="learn pentesting"
            backtext="So you want to Learn Pentesting ?" backsubtext="pentesting is the act of testing the security of a system" /></li>
        </ul>
        <ul className="body-items">
          <li className="body-list-item"><Card imgsrc="/Images/micro.png" text="Embedded Systems" subtext="learn about arduino"
            backtext="So you want to Learn coding microcontrollers ?" backsubtext="A Microcontroller is a small computer that is often used in embedded systems" /></li>
          <li className="body-list-item"><Card imgsrc="/Images/ai.png" text="Artificial Intelligence" subtext="learn about AI"
            backtext="Maybe AI is more your speed ?" backsubtext="AI" /></li>
        </ul>
      </div>
    </>
  )
}

export default Homebody