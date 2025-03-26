import "./App.css";
import { Routes, Route } from "react-router";
import AuthPage from "./pages/AuthPage";
import UserVerificationPage from "./pages/UserVerificationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/verify-user" element={<UserVerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
