import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import SubmitForm from './components/SubmitForm';

const App = () => {
  const [tasks, setTasks] = useState([]);


  useEffect( () => {
    
  }, [tasks])

  const handleSubmit = task => {
    setTasks([...tasks, task])
  }
  const handleDelete = index => {
    const itemsLeft = [...tasks];
    itemsLeft.splice(index, 1)
    setTasks(itemsLeft);
  }
  return(
    <div>
      <h2>React Todo App</h2>
      <Header length={tasks.length}/>
      <TodoList 
        todos={tasks}
        onDelete={handleDelete}
      />

      <SubmitForm 
        onFormSubmit={handleSubmit}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'));