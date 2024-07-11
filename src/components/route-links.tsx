import Link from "next/link";
import React from "react";

function RouteLinks() {
  return (
    <div className="flex items-center space-x-2">
      <h3>
        <Link href={"/products"}>Products</Link>
      </h3>
      <h2>
        <Link href={"/shop"}>Shop</Link>
      </h2>
      <h2>
        <Link href={"/contacts"}>Contacts</Link>
      </h2>
      <h2>
        <Link href={"/login"}> Login</Link>
      </h2>
      <h3>
        <Link href={"/dashboard"}>Dashboard</Link>
      </h3>
    </div>
  );
}

export default RouteLinks;
