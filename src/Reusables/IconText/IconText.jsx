import React from 'react'
import './IconText.css'
export const IconText = ({
    text,
    subtext,
    iClass,
}) => {
    
  return (
      <>
    <div class="widgets_div">
          <div class="icon_div">
            <span><i class={iClass}></i></span>
          </div>
          <div class="text_div">
            <span>{text}</span>
            <br/>
            <span className='transparent'></span>
          </div>
        </div>
        </>
  )
}
