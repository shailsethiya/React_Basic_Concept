
import { useState } from 'react';
import Parent from './Parent';
import './App.css';
import ComponentA from './ComponentA';
import { UserProvider } from './UseContext';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <UserProvider value="shailendra" >
            <ComponentA />  
        </UserProvider>
      </header>
    </div>
  );
}

export default App;
