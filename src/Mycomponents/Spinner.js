import React from 'react'
import Loading from './Loading.gif'
function Spinner(space) {

  
  return (
    <div>
      <img style={{width:'110px' }} src={Loading} alt={Loading} />
    </div>
  )
}

export default Spinner
