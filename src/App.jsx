import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "./pages/AuthPage";
import UserVerificationPage from "./pages/UserVerificationPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify-user" element={<UserVerificationPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
