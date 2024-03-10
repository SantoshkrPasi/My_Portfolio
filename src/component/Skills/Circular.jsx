import React from 'react'

const Circular = (props) => {
    const container = {
        // border : '2px solid red',
        borderRadius : '50%',
        width : '100px',
        height : '100px',
        padding: '10px',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin : '20px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
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

if (window.matchMedia("(max-width: 560px)").matches) {
   container.height ='5px';
  }

export default Circular