import React from "react";
import RouteLinks from "./route-links";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold tracking-wider text-3xl">
        <Link href={"/"}>Logo</Link>
      </h2>

      <RouteLinks />
    </div>
  );
}

export default Header;
