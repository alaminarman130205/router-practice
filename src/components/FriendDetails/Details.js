import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h1>name:{friend.name}</h1>
      <p>call him/her{friend.phone}</p>
      <h2>know in details</h2>
    </div>
  );
};

export default Details;
