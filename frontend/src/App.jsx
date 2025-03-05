import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";

import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import EditProfile from "./pages/editprofile";
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
          <Route path="/signup" element={<Signup />} />
          <Route path="/editprofile" element={<EditProfile/>}/>
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/matching-form" element={<MatchingForm />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
