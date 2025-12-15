import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

import Home from "./pages/Home";
import About from "./pages/About";
import Network from "./pages/Network";
import Technology from "./pages/Technology";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import AutoScroll from "./pages/AutoScroll";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <AutoScroll />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/network" element={<Network />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
