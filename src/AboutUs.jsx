import React from "react";
import "./Aboutus.css";
import Batball from "./box1/images/batball.jpg"; // Cricket Image
import SwimmingImage from "./box1/images/swimming.jpg"; // Swimming Image
import Navb from "./box1/navnbar";

const AboutUs = () => {


  return (
    <div><Navb/>
    <div>
    <div className="about-us">
      <div className="backgroundimg">
        <header className="header">
          <h1 style={{ color: "white" }}>About Us</h1>
        </header>
        <main className="content">
          {/* Cricket Section */}
          <img src={Batball} alt="Cricket" className="cricket-image" />
          <p>
            Welcome to <strong>Box Cricket</strong>, your go-to destination for a thrilling and action-packed cricket experience!
          </p>
          <p>
            Box Cricket, a modern twist on the traditional game of cricket, is designed for urban spaces where full-scale grounds may not be available. Played in a smaller, enclosed arena, Box Cricket retains the excitement and strategy of the sport while offering a more dynamic and fast-paced format. It's perfect for players of all skill levels, whether you're a seasoned cricketer or just playing for fun.
          </p>
          <h2 style={{ backgroundColor: "Highlight", color: "white" }}>Why Choose Box Cricket?</h2>
          <ul>
            <li>
              <strong>Compact & Engaging:</strong> The smaller playing area ensures continuous action and keeps everyone on their toes.
            </li>
            <li>
              <strong>Perfect for All Occasions:</strong> Ideal for team-building activities, birthday celebrations, or casual hangouts with friends.
            </li>
            <li>
              <strong>Inclusive & Accessible:</strong> Suitable for all age groups and skill levels, Box Cricket fosters community bonding and a spirit of teamwork.
            </li>
            <li>
              <strong>Urban-Friendly:</strong> Enjoy cricket in the heart of the city without needing a large outdoor ground.
            </li>
          </ul>
          <h2 style={{ backgroundColor: "Highlight", color: "white" }}>What We Offer for Cricket:</h2>
          <ul>
            <li>Well-maintained, enclosed arenas with artificial turf for a premium playing experience.</li>
            <li>Easy online booking for convenience and accessibility.</li>
            <li>Additional facilities like refreshments, changing rooms, and equipment rentals to enhance your experience.</li>
            <li>A welcoming environment that encourages sportsmanship and camaraderie.</li>
          </ul>

          {/* Swimming Section */}
          <img src={SwimmingImage} alt="Swimming" className="swimming-image" />
          <p>
            We are also excited to offer a fantastic <strong>Swimming</strong> experience for all water enthusiasts!
          </p>
          <p>
            Whether you are a competitive swimmer or someone who enjoys a relaxing swim, our state-of-the-art swimming pools offer the perfect environment. With clear, well-maintained water and dedicated lanes for different swimming styles, our facilities cater to swimmers of all levels.
          </p>
          <h2 style={{ backgroundColor: "Highlight", color: "white" }}>Why Choose Swimming with Us?</h2>
          <ul>
            <li>
              <strong>Relaxing & Refreshing:</strong> Dive into our pools for a relaxing and refreshing swim, ideal for fitness or leisure.
            </li>
            <li>
              <strong>All Skill Levels Welcome:</strong> Whether you're just learning or a seasoned swimmer, our facilities accommodate everyone.
            </li>
            <li>
              <strong>Heated Pools:</strong> Enjoy swimming in comfort, no matter the weather, thanks to our heated pools.
            </li>
            <li>
              <strong>Urban-Friendly:</strong> Perfectly located to allow city dwellers to enjoy a swim without leaving town.
            </li>
          </ul>
          <h2 style={{ backgroundColor: "Highlight", color: "white" }}>What We Offer for Swimming:</h2>
          <ul>
            <li>Indoor and outdoor swimming pools with lap lanes and leisure areas.</li>
            <li>Swimming lessons for children and adults of all skill levels.</li>
            <li>Modern locker rooms, showers, and poolside lounges.</li>
            <li>Refreshing snacks and drinks available at our poolside café.</li>
          </ul>

          <p>
            Whether you are here to swim for fitness, fun, or to compete, our swimming facilities provide an exceptional experience for everyone.
          </p>
          <p>
            Join us at <strong>Box Cricket and Swimming</strong>, where we celebrate sports in all their forms!
          </p>
        </main>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AboutUs;

