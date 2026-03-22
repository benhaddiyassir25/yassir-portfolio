import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photography from "./pages/Photography";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  );
}
