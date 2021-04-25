import React, { useState } from "react";
import "./todolist.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  function addNewItem(itemTitle) {
    setItems([...items, { title: itemTitle, completed: false }]);
  }

  function removeItem(item) {
    console.log(item.title);
    const updatedItems = items.filter(
      (currentItem) => item.title != currentItem.title
    );
    setItems(updatedItems);
  }

  const [items, setItems] = useState([
    { title: "first task", completed: false },
    { title: "second task", completed: false },
    { title: "third task", completed: false },
  ]);
  return (
    <section className="todoapp">
      <Header title="ToDoBoom" addFunc={addNewItem} />

      <Main mainItems={items} removeFunc={removeItem} />

      <Footer />
    </section>
  );
}

export default App;
