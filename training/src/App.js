import React from 'react'
import Greet from './Component/Greet/Greet'
import Welcome from './Component/Welcom/Welcome'
import Counter from './Component/Counter/Counter'

const App = () => {
  return (
    <div>
      <Greet name="Leen"/>
      <Greet name="kareem"/>
      <Greet name="Marah"/>
      <Welcome/>
      <Counter/> 

    </div>
  )
}

export default App
