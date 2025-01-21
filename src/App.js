import React from "react";
import { Route, Routes } from "react-router-dom";
import {About, Price, Service, Register} from "./pages/imports"
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <MainNav/>
    <Routes>
    <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<About />}></Route>
      <Route path="/price" element={<Price />}></Route>
      <Route path="/service" element={<Service />}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
