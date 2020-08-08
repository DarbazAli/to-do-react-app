import React, { useState } from "react";

const SubmitForm = ({ getText }) => {
  const [text, setText] = useState("");

  //   const onTextChange = (task) => {
  //     setText(task);
  //     getText(task);
  //   };

  const handleSubmit = (e) => {
    e.preventDefalut();
    getText(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          placeholder="Endter Todo"
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
