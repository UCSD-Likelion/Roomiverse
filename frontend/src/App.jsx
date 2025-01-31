import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header";

import Login from "./pages/login";
import Home from "./pages/home";
import Signin from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main style={{ paddingTop: "48px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

