import React from 'react'
import { AiFillRocket } from 'react-icons/ai'
import '../../App.css'
import './style.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <AiFillRocket className='icon' />
        <h2>TRAVELX</h2>
      </div>
      <h3>Explore New Places</h3>
    </div>
  )
}
export default Header
