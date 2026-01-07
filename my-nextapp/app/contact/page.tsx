import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        This is the contact page. You can reach me at{" "}
        <a href="mailto:amarahipradeep7319@gmail.com">
          amarahipradeep7319@gmail.com
        </a>
      </p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default page;
