import React from 'react'
import { Data } from './ContextAPI';
const ChildC = () => {
  return (
   <>
   <Data.Consumer> 
    {
    (name)=>{
      console.log(name)
     return (
     <h1> my name is {name}</h1>
     )
    }
  }
   </Data.Consumer>
   </>
  )
}

export default ChildC;
