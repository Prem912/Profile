import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserProfile from "./components/UserProfile";
function Home() {
 

  return (
    
    <div className="home">
      <header>
        <h1>Welcome to My Profile</h1>
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
        <section className="skills">
          <h2>My Skills</h2>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Profile</p>
      </footer>
    </div>
  );
}

export default Home;
