import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";

import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
<<<<<<< HEAD
import EditProfile from "./pages/editprofile";
=======
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";
import MatchingForm from "./pages/matchingForm";
>>>>>>> 3fca4a0d38e8e20f5a5ef73dbef12112cc64c0a0

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/signup" element={<Signup />} />
          <Route path="/editprofile" element={<EditProfile/>}/>
=======
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/matching-form" element={<MatchingForm />} />
>>>>>>> 3fca4a0d38e8e20f5a5ef73dbef12112cc64c0a0
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
