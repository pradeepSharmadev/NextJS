import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        I'm Pradeep Kumar! Passionate to be a Software Development Engineer and
        Love to do problem-solving, continuous learning, and building things,
        which you demonstrate through mastering coding (Python, Java, C++),
        practicing Data Structures & Algorithms (DSA), building personal
        projects, understanding system design, and honing soft skills like
        communication
      </p>
      <p>From India</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default page;
