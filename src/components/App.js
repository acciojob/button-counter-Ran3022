import './../styles/App.css';
import React, { useState } from "react";

const App=()=>{
let [count,setCount] = useState(0);


function addCount(){
  setCount(count+1);
}


  return(<div>
    <p>
      Button Clicked {count} times
    </p>
    <button onClick={addCount}>Click me</button>
  </div>)
}

export default App
