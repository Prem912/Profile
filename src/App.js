import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import 'Routes'

import Home from "./Home";
import About from "./About";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";

function App() {
  const user = {
    mail: 'user@example.com',
    name: 'John Doe',
    logo: 'path/to/logo.png',
  };
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profile" element={<UserProfile mail={user.mail} name={user.name} logo={user.logo} />} />
          <Route path="counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
