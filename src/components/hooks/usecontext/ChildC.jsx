import React, { useContext } from 'react'
import { data,data1 } from './UseContext'
const ChildC = () => {
  const name=useContext(data);
  const age=useContext(data1);
  return (
    <>
    <h1>hii my name is{name}and my age is {age}</h1>
    </>
  )
}

export default ChildC;
