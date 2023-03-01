/* 
    PROPS:
        -Components in React can be passed some parameters. 
        These parameters are generally named props. 
        There is no hard and fast rule that they should be mentioned as props, but it is convenient to use the same convention.
    
    Prop Drilling:    
    -Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level

    Example:  Child A to Child C name transfer data or sharing the data
*/
import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <>
    <ChildB />
    </>
  )
}

export default ChildA;
