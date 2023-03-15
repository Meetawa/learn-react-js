import React, { createContext } from 'react'
import ChildA from './ChildA';
/* 
      -React Context is a way to manage state globally.
      -It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

      -we need Tree things:
        1.create
        2.provider
        3.useContext
*/

const data=createContext();
const data1=createContext();

const UseContext = () => {
  const name="rahulsaini"
  const age=22;
  console.log(data);
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={age}>
      <ChildA />
      </data1.Provider>
    </data.Provider>
    </>
  )
}

export default UseContext
export {data,data1}
