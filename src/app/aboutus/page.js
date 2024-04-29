import React from "react";
import Link from "next/link";

const page = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <div className="flex justify-center p-2">About us</div>
      <div className="p-10 text-center">
        {details.map((users) => (
          <>
            <Link href={`/aboutus/${users.id}`}>{users.name}</Link>
            <br />
            <br />
          </>
        ))}
        <br />
      </div>
    </>
  );
};

export default page;
