import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const Header = ({ lenght }) => {
  return <h4>You have {length} Todos</h4>;
};

const ToDo = ({ item }) => {
  return (
    <div className="todo">
      <p>{item}</p>
      <button>X</button>
    </div>
  );
};
const ToDos = ({ items }) => {
  if (items.lenght < 1) {
    return <p>There is no todo for now</p>;
  } else {
    return (
      <div>
        {items.map((item, index) => {
          return <ToDo key={index} item={item} />;
        })}
      </div>
    );
  }
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {}, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo("");
    todos.push(todo);
  };
  return (
    <div>
      <Header lenght={todos.lenght} />
      <ToDos items={todos} />
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"
          type="text"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

render(<App />, document.getElementById("root"));
