import { Link, Outlet } from "react-router-dom";

const Route1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <Link to="/route1/a">
          <h2 className="border p-2 hover:bg-gray-200">Component A</h2>
        </Link>
        <Link to="/route1/b">
          <h2 className="border p-2 hover:bg-gray-200">Component B</h2>
        </Link>
      </div>
      <div className="border">
        <Outlet />
      </div>
    </div>
  );
};

export default Route1;
