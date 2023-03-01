/*
 Context API:
  -The React Context API is a way for a React app to effectively produce global variables that can be passed around. 
  This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
   Context is also touted as an easier, lighter approach to state management using Redux.
 
    -Context API is a (kind of) new feature added in version 16.3 of React 
    that allows one to share state across the entire app (or part of it) lightly and with ease.

    -Basically it avoiding the PROPS "DRILLING" 

    - if need to sharing the data in a component  then we need 3 terms :
        -create : we need to create a Context React.createContext()
        -provider : Provider is a component that as it's names suggests provides the state to its children
        -consumer :  Consumer as it so happens is a component that consumes and uses the state
   
 */
import React from 'react'
import ChildA from './ChildA';

const ContextAPI = () => {
    const name="rahulsaini"; //suppose this name is required in childA,childB,childC components then we need PROPS DRILLING
    return (
      <div>
        <ChildA name={name}/>
      </div>
    )
}

export default ContextAPI;

        