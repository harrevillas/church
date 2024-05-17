import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Events from "./routes/Events";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import AdminPanel from "./admin/AdminPanel";

export default function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  );
}