import React from 'react'
import Greet from './Component/Greet/Greet'
import Welcome from './Component/Welcom/Welcome'

const App = () => {
  return (
    <div>
      <Greet name="Leen"/>
      <Greet name="kareem"/>
      <Greet name="Marah"/>
      <Welcome/>

    </div>
  )
}

export default App
