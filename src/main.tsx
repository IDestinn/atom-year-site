import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import RequestPage from "./pages/RequestPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {NavBar(0, "Кольцов И. И.", "Администратор")}
    <Router>
      <RequestPage />
    </Router>
  </React.StrictMode>
);
