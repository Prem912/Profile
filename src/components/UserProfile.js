import React from "react";
import "./UserProfile.css";

function UserProfile({ name, mail, logo }) {
  return (
    <div className="user-profile">
      <div className="Inline-user">
        <img className="profile-img" src={logo} alt="User Avatar" />

        <h2 className="user-name">Name: {name}</h2>

        <p className="email">Email: {mail}</p>
      </div>
    </div>
  );
}

export default UserProfile;
