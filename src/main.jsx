import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";

async function getNotes() {
  const response = await fetch("http://localhost:3001/notes");
  const notes = await response.json();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App notes={notes} />
    </React.StrictMode>
  );
}

getNotes();
