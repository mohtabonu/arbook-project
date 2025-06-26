import { Routes, Route, Navigate } from "react-router-dom";
import { UserRoutes } from "./user/routes";
import { AdminRoutes } from "./admin/routes";
import { Login, Register } from "./auth";

export function App() {
  const user = {
    role: "user",
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/*"
        element={ user?.role === "user" ? <UserRoutes /> : <Navigate to="/login" />}
      />

      <Route
        path="/admin/*"
        element={user?.role === "admin" ? <AdminRoutes /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
