import React, { useState } from "react";
import { render } from "react-dom";

const Header = ({ lenght }) => {
  return <h4>You have {length} Todos</h4>;
};

const ToDos = ({ items }) => {
  return items.lenght === 0 ? (
    <p>There is no todo for now!</p>
  ) : (
    <div>
      {items.map((item, index) => (
        <Todo key={index} item={item} />
      ))}
    </div>
  );
};
const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header lenght={todos.lenght} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
