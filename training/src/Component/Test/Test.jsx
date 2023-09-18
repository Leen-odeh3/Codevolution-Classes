import React from 'react'

const Test = () => {

    const style={color:"red" ,fontSize:"20px"}
  const name='someone'
  const nums=[1,2,3,4,5]

  return (
    <div >
      <p style={style}>Hello, This is new Training</p>
      <p>{name ==='leen' ? "hello leen" : "hello there"}</p>
      {nums}
    </div>
  )
}

export default Test
