import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Vacansy from "./pages/Vacansy/Vacansy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Vacansy />} />
    </Routes>
  );
}

export default App;
