import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

const App = () => {
  return(
    <div>
      <h2>React Todo App</h2>
      <Header length={0}/>
    </div>
  )
}

render(<App />, document.getElementById('root'));