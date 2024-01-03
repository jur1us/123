// App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Sectionlucky from "./components/Section_lucky/Section_lucky";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Section />
      <Sectionlucky/>
      <Footer />
    </>
  );
}

export default App;
