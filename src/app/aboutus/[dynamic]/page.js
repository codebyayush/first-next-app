"use client";
import React from "react";

const details = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  console.log(params.dynamic);
  return (
    <div>
      <ul className="flex justify-center p-14">
        {params.dynamic == 1 ? (
          <li>
            <p>Name: {details[0].name}</p>
            <br />
            <p>Role: {details[0].role}</p>
          </li>
        ) : params.dynamic == 2 ? (
          <li>
            <p>Name: {details[1].name}</p>
            <br />
            <p>Role: {details[1].role}</p>
          </li>
        ) : params.dynamic == 3 ? (
          <li>
            <p>Name: {details[2].name}</p>
            <br />
            <p>Role: {details[2].role}</p>
          </li>
        ) : (
          <li> Developer doesn't exist...</li>
        )}
      </ul>
    </div>
  );
};

export default details;
