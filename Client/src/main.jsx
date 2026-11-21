import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import Todocontext from "./todoscontext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Todocontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Todocontext>,
);
