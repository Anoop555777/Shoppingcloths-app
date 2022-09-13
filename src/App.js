import { Routes, Route, Navigate } from "react-router-dom";
import "./categories.style.scss";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default App;
