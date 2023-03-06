import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Crud from "./features/crud/User";
import Todo from "./features/Todo/Todo";

function App() {
  return (
    <div className="App">
      <Crud />
      <Todo />
    </div>
  );
}

export default App;
