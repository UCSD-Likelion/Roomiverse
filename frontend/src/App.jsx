import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";
import UserProfile from "./pages/user-profile";
import Login from "./pages/login";
import LandingPage from "./pages/landing";
import Signup from "./pages/signup";
import ProfilePage from "./pages/profile";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";
import MatchingForm from "./pages/matchingForm";
import MatchingPage from "./pages/matching-page";
import HomePage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <main>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          <Route path="/matching-form" element={<MatchingForm />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/matching" element={<MatchingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
