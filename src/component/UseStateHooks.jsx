function UseStateHooks({item,fun}) {
  //usestate is using for updating our state in a proper manner which is complete update our state 
  
  return (
    <main>
      <h1>state is {item}</h1>
      <button onClick={fun}>Click here for update</button>
    </main>
  )
}

export default UseStateHooks;


