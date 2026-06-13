import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Programs from "./pages/Programs";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/programs" element={<Programs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}