import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// Assignment
// 1. save studentdata in localstorage
// 2. create a route contain upperlimit, lowerlimit
// localhost:5173/?upper=20&&lower==10
//3. create a route in which wee will provide id and show detail
// of specific student
// localhost:5173/:id
