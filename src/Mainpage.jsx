import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AreaDetails from "./box1/AreaDetails";
// import Boxcrickets from "./Boxcrickets";
import Navb from "./box1/nav";
import PlaceDetails from "./lastplacedetails";
import AboutUs from "./AboutUs";
import ContactUs from "./Contact";
import SignupForm from "./box1/SignupFrom";
import Login from "./login";
import Placedetails from "./box1/PlaceDetails";
import BookingPage from "./box1/details";





const Mainpage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navb/>} />
        <Route path="/area/:areaName" element={<AreaDetails />} />
        {/* <Route path="/booking/:placeName" element={<BookingPage />} /> */}
        <Route path="/place-details" element={<PlaceDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Navb/>} />
        <Route path="/place-details" element={<Placedetails />} />
        <Route path="/Booking" element={<BookingPage />} />
      
      </Routes>
    </Router>
  );
};

export default Mainpage;