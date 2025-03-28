import { useState } from "react";
import React from "react";
import logo from './logo/logo.png';

function App() {

  const [counter, setCounter] = useState(0)
  // let counter = 0
  const addValue = () => {
    setCounter(counter +1)
    // setCounter((prevCounter)=> prevCounter + 7)
  }

  const removeValue = () => {
    setCounter(counter -1)
  }
  const resetValue = () => {
    setCounter(0)
  }

  return (
		<div className="App">
			<h1>
				<img src={logo} alt=" " />
				Paddy Counter App
			</h1>
			<p>
				Welcome to Paddy's Counter App
				<span>👋</span>
			</p>
			<div className="counter">
				<h2>Counter Value: {counter}</h2>
				<button onClick={removeValue}>Decrement</button> {""}
				<button onClick={addValue}>Increment</button>
				<h2>
					<code>Total Count: {counter} </code>
				</h2>
				<div className="btn">
					<button onClick={resetValue}>Reset Counter</button>
				</div>
			</div>
			<div className="footer">
				<p>Created by Paddy &copy;</p>
			</div>
		</div>
	);
}

export default App;
