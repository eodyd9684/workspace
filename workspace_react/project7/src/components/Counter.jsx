import React, { useState } from 'react'
import Display from './Display';
import Controller from './Controller';

const Counter = () => {
  
  const [controller, setController] = useState(0);

  return (
    <>
      <h2>Simple Counter</h2>
      <Display controller={controller} />
      <Controller controller={controller} setController={setController}/>
    
    </>
  )
}

export default Counter