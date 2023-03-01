import React from 'react'
import ChildA from './components/propsdrilling/ChildA';
import './App.css'

const App = () => {
  const name="rahulsaini"; //suppose this name is required in childA,childB,childC components then we need PROPS DRILLING
  return (
    <div>
      <ChildA name={name}/>
    </div>
  )
}

export default App
