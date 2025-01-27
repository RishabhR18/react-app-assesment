import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:guid" element={<DetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
