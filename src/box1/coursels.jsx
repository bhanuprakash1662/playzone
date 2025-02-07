import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Swimming from "./images/swimming.jpg";
import football from "./images/football.jpg";
import basketball from "./images/basketball.jpg";
import box4 from "./images/box4.jpg";
import players from "./images/players.jpg";
import box3 from "./images/box3.jpg";
import Multisport from "./images/multisport.jpg";

const CustomCarousel = () => {
  return (
    <div>
      {/* Carousel Section */}
      <div style={{ backgroundColor: "grey", color: "black" }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Swimming}
              alt="First slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={football}
              alt="Second slide"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={box4}
              alt="Third slide"
              style={{ height: "400px", objectFit: "fill" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Cards Section */}
      <div style={{ backgroundColor: "rgb(70, 130, 180)", color: "white" }}>
        <div className="card-container">
          {/* Swimming Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={Swimming} alt="Game" className="card-img" />
              <Card.Body>
                <Card.Title>Premium Swimming Pools</Card.Title>
                <Card.Text>
                  Dive into our state-of-the-art swimming pools with top-tier
                  facilities for all your water activities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Competitive Matches Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={players} alt="Players" className="card-img" />
              <Card.Body>
                <Card.Title>Competitive Matches</Card.Title>
                <Card.Text>
                  Join thrilling matches in football, cricket, basketball, and
                  more!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Easy Booking Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={football} alt="Football" className="card-img" />
              <Card.Body>
                <Card.Title>Easy Booking</Card.Title>
                <Card.Text>
                  Book your preferred venue effortlessly for cricket,
                  football, basketball, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Basketball Courts Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={basketball} alt="Basketball" className="card-img" />
              <Card.Body>
                <Card.Title>Basketball Courts</Card.Title>
                <Card.Text>
                  Play basketball at top-rated courts with excellent amenities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Indoor Games Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={box3} alt="Indoor Games" className="card-img" />
              <Card.Body>
                <Card.Title>Indoor Games</Card.Title>
                <Card.Text>
                  Enjoy a variety of indoor games like table tennis, chess,
                  carrom, and more in our premium facilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Other Games Card */}
          <div>
            <Card className="card">
              <Card.Img variant="top" src={Multisport} alt="Other Games" className="card-img" />
              <Card.Body>
                <Card.Title>Other Games</Card.Title>
                <Card.Text>
                  Explore a wide range of other games and activities tailored
                  for all age groups and skill levels.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#222",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h4>About Us</h4>
          <p>
            We are passionate about providing the best sports venues for a
            variety of games. Our platform is designed to offer an easy and
            enjoyable booking experience for all sports enthusiasts.
          </p>
          <hr style={{ border: "1px solid white", margin: "20px 0" }} />
          <div>
            <p>
              <strong>Contact Number:</strong> +91 6301993194, 7337011242
            </p>
            <p>
              <strong>Email:</strong> MultiSports@gmail.com
            </p>
            <p>
              <strong>Location:</strong> PLOT NO:46 NEAR KPHP, HYDERABAD, India
            </p>
            <p>
              <strong>Copyrights</strong>© 2024 MultiSports. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Responsive Styles */}
      <style>
        {`
          /* Card Container for Large Screens */
          @media (min-width: 1024px) {
            .card-container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              justify-items: center;
              padding: 20px;
            }

            .card {
              background-color: #003366;
              color: white;
              max-width: 320px;
              height: auto;
            }

            .card-img {
              height: 200px;
              object-fit: cover;
            }
          }

          /* For Medium Screens (≥ 768px and < 1024px) */
          @media (max-width: 1024px) and (min-width: 768px) {
            .card-container {
              display: grid;
              grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
              gap: 20px;
              padding: 20px;
            }

            .card {
              background-color: #003366;
              color: white;
              max-width: 100%;
            }

            .card-img {
              height: 180px;
            }
          }

          /* For Small Screens (≤ 768px) */
          @media (max-width: 768px) {
            .card-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
              padding: 10px;
            }

            .card {
              width: 90%;
              background-color: #003366;
              color: white;
            }

            .card-img {
              height: 150px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomCarousel;