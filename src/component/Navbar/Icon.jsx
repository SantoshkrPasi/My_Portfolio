import React from 'react'

const Icon = (props) => {
  const container ={
   margin : '10px',
  }
  return (
    <div style={container}>
      <h3 className="bg-midnight text-tahiti">{props.name}</h3>
    </div>
  )
}

export default Icon
