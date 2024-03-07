import React from 'react'
import { Link } from 'react-router-dom';
const Icon = (props) => {
  const container ={
   margin : '0px 10px',
  }
  return (
    <div style={container}>
      <h3 className="bg-midnight text-tahiti">{props.name}</h3>
    </div>
  )
}

export default Icon
