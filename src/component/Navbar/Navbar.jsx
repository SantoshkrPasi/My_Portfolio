import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='container' >
      <ul className='containerElement'>
        <Link to='/'><li className="items">Home</li></Link>
        <Link to='/about'>  <li className="items">About</li></Link>
        <Link to='/skill'> <li className="items">Skills</li></Link>
        <Link to='/project'><li className="items">Projects</li></Link>
        <Link to='/contact'> <li className="items">Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
