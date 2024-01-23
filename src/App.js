import logo from './logo.svg';
import { useEffect } from "react";
import {
  BrowserRouter as Router, // Import BrowserRouter
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import CelebratoryMoment from "./pages/CelebratoryMoment";
import SignUpSucceed from "./pages/SignUpSucceed";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UpdatedHome from "./pages/UpdatedHome";

function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/celebratory-moment" element={<CelebratoryMoment />} />
        <Route path="/sign-up-succeed" element={<SignUpSucceed />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="/log-in" element={<SignUp />} /> */}
        <Route path="/updated-home" element={<UpdatedHome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
