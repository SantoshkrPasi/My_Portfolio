import React from 'react'

const Circular = (props) => {
    const container = {
        border : '2px solid red',
        borderRadius : '50%',
        width : '100px',
        height : '100px',
        padding: '10px',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin : '20px',
        color :'white',
        boxShadow: `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;`,
    }
    const content = {
        display :'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        gap : '10px',
    }

  return (
    <div style={container}>
        <div style={content}>
            <h3>{props.count}</h3>
            <h4>{props.name}</h4>
        </div>
    </div>
  )
}


export default Circular