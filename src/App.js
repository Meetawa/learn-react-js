import Header from './component/Header';
import Footer from './component/Footer';
import UseStateHooks from './component/UseStateHooks';
import { useState } from 'react';

function App() {
  const [state, setState]=useState("rahulsaini");
  const fun=()=>{
    setState("hari singh saini");
    console.log(state);
  }

  return (
    <div className="App">
      <Header text="rahulsaini" />
      <UseStateHooks item={state}
      fun={fun}
       />
      <Footer />
    </div>
  );
}

export default App;