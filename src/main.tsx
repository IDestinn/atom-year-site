import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import RequestPage from "./pages/RequestPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {NavBar("Кольцов И. И.", "Администратор")}
      <Router>
        <RequestPage />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
