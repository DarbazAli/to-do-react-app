import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import SubmitForm from "./components/SubmitForm";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <div className="todo-app">
      <Header length={items.length} />
      <SubmitForm getText={(e) => setItems(e)} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
