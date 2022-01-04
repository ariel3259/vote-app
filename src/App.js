import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VotePage from "./Pages/VotePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <VotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
