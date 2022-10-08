import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;
  return (
    <div className="friend">
      <h1>name :{name}</h1>
      <p>email :{email}</p>
      <h4>
        username: <Link to={`/friend/${id}`}>{username}</Link>{" "}
      </h4>
    </div>
  );
};

export default Friend;
