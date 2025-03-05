import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/private-route";

import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import MatchingForm from "./pages/matchingForm";
import MatchCardList from "./pages/MatchCardList"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/matching-form" element={<MatchingForm />} />
        <Route path="/matchcard" element={<MatchCardList />} /> {/* New Route */}

        {/* Protected Route for Dashboard */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
