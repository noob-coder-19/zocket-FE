import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Campaign from "./pages/Campaign";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Campaign />} />
      </Routes>
    </div>
  );
}

export default App;
