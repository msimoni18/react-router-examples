import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-2 py-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
