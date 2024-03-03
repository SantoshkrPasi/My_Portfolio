import React from 'react'
import Icon from './Icon'

const Navbar = () => {
  const container = {
    //  backgroundColor : 'red',
     padding: '20px',

  }
  const containerElement = {
    // backgroundColor:'yellow',
    display : 'flex',
    justifyContent: 'end', 
    margin : '0px 50px',    
  }
  return (
    <div style={container} >
      <div style={containerElement}>
      <Icon name = "Home" />
      <Icon name = "About"/>
      <Icon name = "Project"/>
      <Icon name = "Skills"/>
      <Icon name = "Contacts"/>
      </div>
    </div>
  )
}

export default Navbar
