import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";
import UserProfile from "./pages/user-profile";
import Login from "./pages/login";
import LandingPage from "./pages/landing";
import Signup from "./pages/signup";
import ProfileCard from "./pages/profile";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";
import MatchingForm from "./pages/matchingForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/matching-form" element={<MatchingForm />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
