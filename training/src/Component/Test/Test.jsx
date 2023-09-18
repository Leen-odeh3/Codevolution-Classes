import React from 'react'
import './Test.scss'

const Test = () => {

    const style={color:"red" ,fontSize:"20px"}
  const name='someone'
  const nums=[1,2,3,4,5]

  return (
    <div >
      <p style={style}>Hello, This is new Training</p>
      <p>{name ==='leen' ? "hello leen" : "hello there"}</p>
      {nums}
      <div className='info'>
        <h3>Hello iam leen </h3>
        <p>How are you?</p>
      </div>


      
    </div>
  )
}

export default Test
