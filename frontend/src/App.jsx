import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";
import UserProfile from "./pages/user-profile";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ProfilePage from "./pages/profile";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";
import MatchingForm from "./pages/matching-form";
import MatchingPage from "./pages/matching-page";
import HomePage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/matching-form" element={<MatchingForm />} />
          </Route>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/matches" element={<MatchingPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
