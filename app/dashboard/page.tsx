import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      Dashboard
      <h1>
        <Link href="/api">APIII</Link>
      </h1>
    </div>
  );
};

export default page;
