import React from "react";
import { ToastContainer } from "react-toastify";
import Dashboard from "./views/Dashboard/Dashboard";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-base-200">
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
