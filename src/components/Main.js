import React from "react";

function Main({ mainItems, removeFunc }) {
  console.log({ mainItems });

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {mainItems.map((item, index) => (
          <li key={index}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                // checked={item.completed}
              />
              <label>{item.title}</label>
              <button
                onClick={function () {
                  removeFunc(item);
                }}
                className="destroy"
              ></button>
            </div>
            <input className="edit" />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Main;
