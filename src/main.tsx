import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import MainPage from "./pages/MainPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {NavBar(0, "Кольцов И. И.", "Администратор")}
    <Router>
      <MainPage />
    </Router>
  </React.StrictMode>
);
