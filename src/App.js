import React from 'react';
import '../src/App.css';
import Jokes from '../src/components/Jokes';
import Home from '../src/components/Home';

function App() {
  return (
    <div className='container'>
      <Home />
      <Jokes />
    </div>
  )
}

export default App