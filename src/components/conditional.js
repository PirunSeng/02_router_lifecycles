import React from 'react';

const Conditional = () => {
  // const value = true;
  const showIt = () => {
    return false;
  }

  const content = () => {
    return(
      showIt() ? 'It is TRUE' : 'It is FALSE'
    )
  }

  return(
    <div>
      {
        content()
      }
    </div>
  )
}

export default Conditional;
