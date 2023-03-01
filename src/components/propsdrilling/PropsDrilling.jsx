import React from 'react'
import ChildA from './ChildA';

const PropsDrilling = () => {
  const name="rahulsaini"; //suppose this name is required in childA,childB,childC components then we need PROPS DRILLING
  return (
    <div>
      <ChildA name={name}/>
    </div>
  )
}

export default PropsDrilling;
