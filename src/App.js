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
import LogIn from './pages/LogIn';
import Preferences from "./pages/Preferences";
import Preferences1 from "./pages/Preferences1";
import Preferences2 from "./pages/Preferences2";
import Preferences3 from "./pages/Preferences3";
import Preferences4 from "./pages/Preferences4";

function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/preferences-1" element={<Preferences1 />} />
        <Route path="/preferences-2" element={<Preferences2 />} />
        <Route path="/preferences-3" element={<Preferences3 />} />
        <Route path="/preferences-4" element={<Preferences4 />} />
        <Route path="/celebratory-moment" element={<CelebratoryMoment />} />
        <Route path="/sign-up-succeed" element={<SignUpSucceed />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
