// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import Logo from "./images/Logo.jpg";
// import Loginicon from "./images/Loginicon.jpg";
// import CustomCarousel from "./coursels";
// import "./Box1.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// const Navb = () => {
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (search.trim() === "") {
//       alert("Please enter an area name to search");
//       return;
//     }
//     navigate(`/area/${search.trim().toLowerCase()}`);
//   };

//   const handlePlaceClick = (place) => {
//     navigate(`/area/${place.toLowerCase()}`);
//   };

//   return (
//     <>
//       {/* Responsive Navbar */}
//       <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top custom-navbar">
//         <Container>
//           <Navbar.Brand href="/home" className="d-flex align-items-center">
//             <img
//               src={Logo}
//               alt="Logo"
//               style={{ height: "50px", width: "50px", borderRadius: "25px" }}
//               className="me-2"
//             />
//             <span>PLaY ZoNE</span>
//           </Navbar.Brand>

//           {/* Toggle Button for Mobile View */}
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ms-auto align-items-center">
//               {/* Home */}
//               <Nav.Link href="/home" className="mx-2">
//                 Home
//               </Nav.Link>

//               {/* About Us */}
//               <Nav.Link href="/aboutus" className="mx-2">
//                 About Us
//               </Nav.Link>

//               {/* Contact */}
//               <Nav.Link href="/contact" className="mx-2">
//                 Contact
//               </Nav.Link>

//               {/* Places Dropdown */}
//               <NavDropdown
//                 title="Places"
//                 id="places-dropdown"
//                 className="mx-2"
//                 menuVariant="dark"
//               >
//                 <div
//                   style={{
//                     maxHeight: "200px",
//                     overflowY: "auto",
//                   }}
//                 >
//                   {[
//                     "KPHB",
//                     "Jntu",
//                     "Manikonda",
//                     "Kukatpally",
//                     "Madhapur",
//                     "Ammerpet",
//                     "Srnagar",
//                     "Hitechcity",
//                     "Gachibowli",
//                     "Bachupally",
//                     "Kondapur",
//                     "Nizampet",
//                     "Miyapur",
//                   ].map((place) => (
//                     <NavDropdown.Item key={place} onClick={() => handlePlaceClick(place)}>
//                       {place}
//                     </NavDropdown.Item>
//                   ))}
//                 </div>
//               </NavDropdown>

//               {/* Search Bar */}
//               <div className="d-flex align-items-center mx-2 search-container">
//                 <div style={{ position: "relative", width: "350px" }}>
//                   <input
//                     type="text"
//                     placeholder="Enter Location..."
//                     className="form-control"
//                     style={{
//                       width: "100%",
//                       borderRadius: "25px",
//                       padding: "0.8rem 2rem 0.8rem 1rem",
//                     }}
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <FontAwesomeIcon
//                     icon={faMagnifyingGlass}
//                     style={{
//                       position: "absolute",
//                       right: "10px",
//                       top: "50%",
//                       transform: "translateY(-50%)",
//                       color: "gray",
//                       cursor: "pointer",
//                     }}
//                     onClick={handleSearch}
//                   />
//                 </div>
//               </div>

//               {/* Login with Icon */}
//               <Nav.Link href="/login" className="mx-2 d-flex align-items-center">
//                 <img
//                   src={Loginicon}
//                   alt="Login"
//                   style={{
//                     height: "30px",
//                     width: "30px",
//                     borderRadius: "50%",
//                     marginRight: "7px",
//                   }}
//                 />
//                 Login
//               </Nav.Link>

//               {/* Signup */}
//               <Nav.Link href="/signup" className="mx-2">
//                 Signup
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Marquee Section */}
//       <div style={{ paddingTop: "100px" }}>
//         <div
//           className="marquee-container"
//           style={{
//             overflow: "hidden",
//             position: "relative",
//             height: "40px",
//             backgroundColor: "black",
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//           }}
//         >
//           <div
//             className="marquee"
//             style={{
//               display: "inline-block",
//               whiteSpace: "nowrap",
//               animation: "scrollLeft 15s linear infinite",
//               fontSize: "20px",
//               color: "blue",
//               fontWeight: "bold",
//               lineHeight: "40px",
//               paddingLeft: "100%",
//             }}
//           >
//             🏏 PlAyZoNe is available round the clock! 🏏 Enjoy non-stop cricket fun and exclusive offers on multiple sports like football, badminton, tennis, and more! 🏀🎾⚽ Join now! 🏏
//           </div>
//         </div>

//         {/* Carousel Section */}
//         <CustomCarousel />
//       </div>

//       {/* CSS for Marquee Animation */}
//       <style>
//         {`
//           @keyframes scrollLeft {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Navb;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "./images/Logo.jpg";
import Loginicon from "./images/Loginicon.jpg";
import CustomCarousel from "./coursels";
import "./Box1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navb = () => {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  ); // Persist login status
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter an area name to search");
      return;
    }
    navigate(`/area/${search.trim().toLowerCase()}`);
  };

  const handlePlaceClick = (place) => {
    navigate(`/area/${place.toLowerCase()}`);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/login");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/home");
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="fixed-top custom-navbar">
        <Container>
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "50px", width: "50px", borderRadius: "25px" }}
              className="me-2"
            />
            <span>PLaY ZoNE</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="/home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="/aboutus" className="mx-2">About Us</Nav.Link>
              <Nav.Link href="/contact" className="mx-2">Contact</Nav.Link>

              <NavDropdown title="Places" id="places-dropdown" className="mx-2" menuVariant="dark">
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {["KPHB", "Jntu", "Manikonda", "Kukatpally", "Madhapur", "Ammerpet", "Srnagar", "Hitechcity", "Gachibowli", "Bachupally", "Kondapur", "Nizampet", "Miyapur"].map((place) => (
                    <NavDropdown.Item key={place} onClick={() => handlePlaceClick(place)}>
                      {place}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>

              <div className="d-flex align-items-center mx-2 search-container">
                <div style={{ position: "relative", width: "350px" }}>
                  <input
                    type="text"
                    placeholder="Enter Location..."
                    className="form-control"
                    style={{ width: "100%", borderRadius: "25px", padding: "0.8rem 2rem 0.8rem 1rem" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", color: "gray", cursor: "pointer" }}
                    onClick={handleSearch}
                  />
                </div>
              </div>

              {isLoggedIn ? (
                <NavDropdown
                  title={<img src={Loginicon} alt="Profile" style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "7px" }} />}
                  id="profile-dropdown"
                  className="mx-2"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login" className="mx-2 d-flex align-items-center" onClick={handleLogin}>
                  <img src={Loginicon} alt="Login" style={{ height: "30px", width: "30px", borderRadius: "50%", marginRight: "7px" }} />
                  Login
                </Nav.Link>
              )}

              <Nav.Link href="/signup" className="mx-2">Signup</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ paddingTop: "100px" }}>
        <div className="marquee-container" style={{ overflow: "hidden", position: "relative", height: "40px", backgroundColor: "black", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)" }}>
          <div className="marquee" style={{ display: "inline-block", whiteSpace: "nowrap", animation: "scrollLeft 15s linear infinite", fontSize: "20px", color: "blue", fontWeight: "bold", lineHeight: "40px", paddingLeft: "100%" }}>
            🏏 PlAyZoNe is available round the clock! 🏏 Enjoy non-stop cricket fun and exclusive offers on multiple sports like football, badminton, tennis, and more! 🏀🎾⚽ Join now! 🏏
          </div>
        </div>

        <CustomCarousel />
      </div>

      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navb;
