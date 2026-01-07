import Link from "next/dist/client/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new">New Users</Link>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default page;
