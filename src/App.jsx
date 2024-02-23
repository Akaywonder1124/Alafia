import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Testing from "./pages/Testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/" hospitals element={<div>Hospitals</div>} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/test" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
