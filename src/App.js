import React, { useState } from "react";
import "./todolist.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [items, setItems] = useState([false, "shani", "yana", 5]);
  return (
    <section className="todoapp">
      <Header title="ToDoBoom" />

      <Main mainItems={items} />

      <Footer />
    </section>
  );
}

export default App;
