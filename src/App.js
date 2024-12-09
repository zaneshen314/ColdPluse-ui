import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Ticket from "./components/Ticket";


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/ticket">Ticket</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/login">Login</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
