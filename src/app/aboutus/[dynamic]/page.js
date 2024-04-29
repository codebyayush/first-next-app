"use client";
import React from "react";

const details = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const findUser = details.find((users) => users.id == params.dynamic);

  return (
    <div>
      <ul className="flex justify-center p-14">
        {findUser ? (
          <>
            <li>
              <p>Name: {findUser.name}</p>
              <br />
              <p>Role: {findUser.role}</p>
            </li>
          </>
        ) : (
          <li>Developer doesn't exist...</li>
        )}
      </ul>
    </div>
  );
};

export default details;
