import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isWidthDecreased, setIsWidthDecreased] = useState(false);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setIsWidthDecreased(true);
      } else {
        setIsWidthDecreased(false);
      }
    };
    handleResize();
  },[window.innerWidth]);

  const toggle = () => {
    setTab(!tab);
  }

  return (
    <nav className='container' >
      {!isWidthDecreased ? (
        <ul className='containerElement'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li className='items'>Home</li>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <li className='items'>About</li>
          </Link>
          <Link to='/skill' style={{ textDecoration: 'none' }}>
            <li className='items'>Skills</li>
          </Link>
          <Link to='/project' style={{ textDecoration: 'none' }}>
            <li className='items'>Projects</li>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <li className='items'>Contact</li>
          </Link>
        </ul>
      ) : (
          !tab ?(
      <div className='second_nav'>
        <div className='box'  onClick={toggle}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
      ) :(
      <ul className='containerElement'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li className='items' onClick={toggle}>Home</li>
        </Link>
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <li className='items' onClick={toggle}>About</li>
        </Link>
        <Link to='/skill' style={{ textDecoration: 'none' }}>
          <li className='items' onClick={toggle}>Skills</li>
        </Link>
        <Link to='/project' style={{ textDecoration: 'none' }}>
          <li className='items' onClick={toggle}>Projects</li>
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }}>
          <li className='items' onClick={toggle}>Contact</li>
        </Link>
      </ul>
      )       
      )}
    </nav>
  )
}

export default Navbar
