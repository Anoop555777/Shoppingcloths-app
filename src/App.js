import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import "./categories.style.scss";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        {/* <Route path="shop" element={<Shop />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
