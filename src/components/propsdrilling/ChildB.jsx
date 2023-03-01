import React from 'react'
import ChildC from './ChildC'

const ChildB = ({name}) => {
  return (
      <>
      <h2>name B is : {name}</h2>
      <ChildC name={name}></ChildC>
      </>
  )
}

export default ChildB;
