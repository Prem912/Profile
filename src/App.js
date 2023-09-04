import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Import 'Routes'

import Home from "./Home";
import About from "./About";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import DataFetcher from "./DataFetcher";
import DataFetcherHooks from "./DataFetcherHooks";
import profileImg from "./images/user-profile.avif";
function App() {
  const user = {
    mail: 'prem@gmail.com',
    name: 'Prem',
    logo: profileImg,
  };
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="profile" element={<UserProfile mail={user.mail} name={user.name} logo={user.logo} />} />
          <Route path="counter" element={<Counter />} />
          <Route path="dataFetcher" element={<DataFetcher />} />
          <Route path="dataFetcherHooks" element={<DataFetcherHooks />} />
      </Routes>
    </Router>
  );
}

export default App;
