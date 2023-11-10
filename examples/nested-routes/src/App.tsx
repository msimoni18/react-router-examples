import { Routes, Route, Navigate, NavLink, Outlet } from "react-router-dom";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 border-b bg-background px-4 h-12 z-10">
      <h1>App Name</h1>
      <div className="flex gap-4 h-8 items-center">
        <NavLink to="/route1">
          {({ isActive }) => (
            <h2
              className={cn(
                "hover:underline hover:text-blue-500",
                isActive ? "text-blue-500" : null
              )}
            >
              Route 1
            </h2>
          )}
        </NavLink>
        <NavLink to="/route2">
          {({ isActive }) => (
            <h2
              className={cn(
                "hover:underline hover:text-blue-500",
                isActive ? "text-blue-500" : null
              )}
            >
              Route 2
            </h2>
          )}
        </NavLink>
      </div>
    </div>
  );
};

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

const CompA = () => {
  return <div>Component A</div>;
};

const CompB = () => {
  return <div>Component B</div>;
};

const Route1 = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <NavLink to="/route1/a">
          {({ isActive }) => (
            <h2
              className={cn(
                "border p-2 hover:bg-gray-200",
                isActive ? "bg-gray-200" : null
              )}
            >
              Component A
            </h2>
          )}
        </NavLink>
        <NavLink to="/route1/b">
          {({ isActive }) => (
            <h2
              className={cn(
                "border p-2 hover:bg-gray-200",
                isActive ? "bg-gray-200" : null
              )}
            >
              Component B
            </h2>
          )}
        </NavLink>
      </div>
      <div className="border">
        <Outlet />
      </div>
    </div>
  );
};

const Route2 = () => {
  return <div>Route2</div>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/route1" replace />} />
        <Route path="route1" element={<Route1 />}>
          <Route index element={<Navigate to="/route1/a" replace />} />
          <Route path="a" element={<CompA />} />
          <Route path="b" element={<CompB />} />
        </Route>
        <Route path="route2" element={<Route2 />} />
      </Route>
    </Routes>
  );
}

export default App;
