import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Route1 from "./components/Route1";
import Route2 from "./components/Route2";
import CompA from "./components/CompA";
import CompB from "./components/CompB";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/route1" replace />} />
        <Route path="route1" element={<Route1 />}>
          <Route path="a" element={<CompA />} />
          <Route path="b" element={<CompB />} />
        </Route>
        <Route path="route2" element={<Route2 />} />
      </Route>
    </Routes>
  );
}

export default App;
