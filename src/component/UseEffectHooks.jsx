import { useState,useEffect} from "react"

function UseEffectHooks() {
    const [counter,setCounter]=useState(0);
    const fun=()=>{
        setCounter(counter+1);    
    }
    useEffect(()=>{
        console.log(`state is ${counter}`)
    },[counter])
  return (
    <div>
        <center>
      <h1>{counter}</h1>
      <button onClick={fun}>check here</button>
      </center>
    </div>
  )
}

export default UseEffectHooks
