import React from "react";
function Header({ title, addFunc }) {
  function handleEnter(event) {
    if (event.key === "Enter") {
      addFunc(event.target.value);
    }
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyDown={handleEnter}
      />
    </header>
  );
}

export default Header;
