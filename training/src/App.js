import React from 'react'
import Greet from './Component/Greet/Greet'
import Welcome from './Component/Welcom/Welcome'
import Counter from './Component/Counter/Counter'
import Destructuring from './Component/Destructuring/Destructuring'

const App = () => {
  return (
    <div>
      <Greet name="Leen"/>
      <Greet name="kareem"/>
      <Greet name="Marah"/>
      <Welcome/>
      <Counter/> 
      <Destructuring name="leen" age="22" address="tulkarm"/>
    </div>
  )
}

export default App
