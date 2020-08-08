import React, { useState } from "react";
import { render } from "react-dom";

const Header = ({ lenght }) => {
  return <h4>You have {length} Todos</h4>;
};

const ToDo = ({item}) => {
  console.log(item);
  return (
    <div>
      <p>{item}</p>
      <button>X</button>
    </div>
  )
}
const ToDos = ({ items }) => {
  if ( items.lenght < 1 ) {
    return (<p>There is no todo for now</p>)
  } else {
    return (
      <div>
        {
          items.map( (item, index) => {
            return (<ToDo key={index} item={item} />)
          })
        }
      </div>
    )
  }
}


const App = () => {
  const [todos, setTodos] = useState(['Read a book']);
  return (
    <div>
      <Header lenght={todos.lenght} />
      <ToDos 
        items={todos}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
