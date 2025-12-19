import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/guards/ProtectedRoute";
import UnprotectedRoute from "../components/guards/UnprotectedRoute";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyCode from "../pages/VerifyCode";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        {/* AUTH PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* AUTH VALIDATE AUTHENTICATED*/}
      <Route
        path="/login"
        element={
          <UnprotectedRoute>
            <Login />
          </UnprotectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <UnprotectedRoute>
            <Register />
          </UnprotectedRoute>
        }
      />
      <Route
        path="/verify-code"
        element={
          <UnprotectedRoute>
            <VerifyCode />
          </UnprotectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
