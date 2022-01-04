import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VotePage from "./Pages/VotePage";
import ResultPage from "./Pages/ResultPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = { <VotePage />} />
        <Route path = "/result" elemet/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
