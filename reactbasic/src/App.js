
import { useState } from 'react';
import './App.css';

function App() {
  const[msg, setMsg] = useState('Hello React');

  const handleMsg = () => {
      setMsg("Thanks for subscribe")
  } 

  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
        <button onClick={() => handleMsg()}>Subscribe</button>
      </header>
    </div>
  );
}

export default App;
