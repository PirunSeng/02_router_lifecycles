import React from 'react'

const Card = (props) => {
  const style = {
    background: 'green'
  }

  return(
    <div style={style}>
      {props.children}
    </div>
  )
}

export default Card;
