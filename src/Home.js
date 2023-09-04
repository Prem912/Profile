import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserProfile from "./components/UserProfile";
function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Home Page</h1>
      </header>
      <main>
        <section className="intro">
          <nav>
            <ul>
              <li>
                <Link to="profile">User Profile</Link>
              </li>
              <li>
                <Link to="counter">Counter</Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default Home;
