import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      New Users Page
      {["Pradeep", "Ram", "Balram", "Krishna", "Ramesh"].map((user,index) => (
        <div key={index}>{index + 1 }. {user}</div>
      ))}
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default page;
