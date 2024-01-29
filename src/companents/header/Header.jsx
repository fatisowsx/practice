import React from 'react'
import './Header.css'

const Header = (props) => {
  return (<div className='headercss'>Header
  <ul>
    <li>{props.page1}</li>
    <li>{props.page2}</li>
    <li>{props.page3}</li>
  </ul>
</div>
  )
}

export default Header