import React, { useState } from "react";
import "./App.css";
import Home from "./components/home/home";
import Header from "./components/Header";
import MlHome from "./components/ml/MlHome";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div>
      {activePage == "Home" ? (
        <Home pageChange={(v) => setActivePage(v)} />
      ) : activePage == "About" ? (
        <Home pageChange={(v) => setActivePage(v)} />
      ) : activePage == "MlHome" ? (
        <MlHome pageChange={(v) => setActivePage(v)} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
