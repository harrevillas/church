import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "./messenger.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Messenger() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return <>{children}</>; // Return children within React.Fragment
  };

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Messenger;
