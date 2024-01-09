
import React from "react";
import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  return (
    <div>
      function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
    </div>
  )
}

export default App
