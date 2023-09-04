import React from "react";
import "./UserProfile.css";

function UserProfile({ name, mail, avatarUrl }) {
  return (
    <div className="user-profile">
      <div className="Inline-user">
        <img src={avatarUrl} alt="User Avatar" />

        <h2>{name}</h2>

        <p>Email: {mail}</p>
      </div>
    </div>
  );
}

export default UserProfile;
