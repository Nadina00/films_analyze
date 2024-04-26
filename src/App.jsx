import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";


function App() {
  return (
    <>
      <Routes basename="/FilmsAnalyze">
        <Route path="/" element={<Home />} />
       
      </Routes>
    </>
  );
}

export default App;
