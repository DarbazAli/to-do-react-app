import React, { useState } from "react";
import { render } from "react-dom";

const Header = ({ lenght }) => {
  return <h4>You have {length} Todos</h4>;
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
