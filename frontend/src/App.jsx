import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";

import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./utils/private-route";

function App() {
  return (
    <AuthProvider>
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
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
