import {
  BrowserRouter as Router, // Import BrowserRouter
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import CelebratoryMoment from "./pages/CelebratoryMoment";
import SignUpSucceed from "./pages/SignUpSucceed";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UpdatedHome from "./pages/UpdatedHome";
import Preferences from './pages/Preferences';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/celebratory-moment" element={<CelebratoryMoment />} />
        <Route path="/sign-up-succeed" element={<SignUpSucceed />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/updated-home" element={<UpdatedHome />} />
        <Route path="/preferences-1" element={<Preferences />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
