import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Edit from "./components/Pages/Edit";
function App() {
  return (
    <div className="container">
      <h1>Meme-Generator-App</h1>
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/edit" element=<Edit /> />
      </Routes>
    </div>
  );
}

export default App;
