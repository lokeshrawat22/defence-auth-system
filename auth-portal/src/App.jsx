import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { checkAuthAndRedirect } from "../src/utils/Auth"
import { Toaster } from "react-hot-toast";
function App() {

  useEffect(() => {
    checkAuthAndRedirect();
  }, []);

  return (
    <>
     <>
      <Toaster position="top-right" reverseOrder={false} />
      
    </>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
