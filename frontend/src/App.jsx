import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";

import Login from "./pages/login";
import Home from "./pages/home";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/matching-form" element={<MatchingForm />} />
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
