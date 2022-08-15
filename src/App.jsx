import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { AuthProvider } from "./contexts/auth";


const App = () => {
  const Private = ({ children }) => {
    const authenticated = localStorage.getItem("user");

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Private> <Home /> </Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;