import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 border-b bg-background px-4 h-12 z-10">
      <h1>
        App Name
      </h1>
      <div className="flex gap-4 h-8 items-center">
        <Link
          to="/route1"
        >
          <h2 className="hover:underline hover:text-blue-500">Route 1</h2>
        </Link>
        <Link
          to="route2"
        >
          <h2 className="hover:underline hover:text-blue-500">Route 2</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
