import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <Router>
      <header style={styles.header}>
        <div style={styles.logoSection}>
          <img
            src="https://via.placeholder.com/50" // Replace with your cricket image URL
            alt="PlAyZoNe Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>PlAyZoNe</h1>
        </div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.link}>Home</Link>
          <Link to="/aboutus" style={styles.link}>About Us</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
          <Link to="/loginsignup" style={styles.link}>Login/Signup</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3f82af",
    padding: "10px 20px",
    color: "#fff",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
    marginRight: "10px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default App;
