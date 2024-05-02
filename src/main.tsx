import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import RequestPage from "./pages/RequestPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./pages/MainPage.tsx";
import NominationsPage from "./pages/NominationsPage.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {NavBar("Кольцов И. И.", "Администратор")}
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/requests" element={<RequestPage />} />
          <Route path="/nominations" element={<NominationsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
