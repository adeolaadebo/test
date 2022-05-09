import { useState, useEffect } from "react";

//function App() {

const App = () => {
    const [counter, setCounter] = useState(0);

 //<button onClick={() => alert('clicked') }>-</button>  

useEffect(() => {
  setCounter(100);
}, []);

  return (
    <div className="App">
     <button onClick={() =>  setCounter((prevCount) => prevCount - 1 )}>-</button>
     <h1>{counter}</h1>
     <button onClick={() =>  setCounter((prevCount) => prevCount + 1 )} >+</button>
    </div>
  );
}


export default App;
