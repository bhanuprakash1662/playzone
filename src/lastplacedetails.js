import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./PlaceDetails.css"; // Import custom CSS file

const PlaceDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { place } = location.state; // Access the passed data

  if (!place) {
    return (
      <Container className="mt-4">
        <h1 className="text-center text-danger">Place Not Found</h1>
        <p className="text-center">Please try booking another place.</p>
      </Container>
    );
  }

  const handleBooking = () => {
    navigate("/booking", { state: { place } });
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4 text-light">{place.name}</h1>
      <Card
        className="custom-card"
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)", // Dark gradient background
          color: "#fff", // White text for better readability
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Subtle shadow
        }}
      >
        <Row>
          {/* Image Carousel Section */}
          <Col md={6} className="mb-4">
            <Carousel>
              {place.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 carousel-image"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                  <Carousel.Caption>
                    <h5>{place.name}</h5>
                    <p>Slide {index + 1}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Content Section */}
          <Col md={6} className="mb-4">
            <Card.Body>
              <Row>
                {/* Play Zone Club */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Play Zone Club:</strong> {place.playZoneClub}
                  </Card.Text>
                </Col>

                {/* Address */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Address:</strong> {place.address}
                  </Card.Text>
                </Col>

                {/* Price per Hour */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Price per hour:</strong> ₹{place.pricePerHour}
                  </Card.Text>
                </Col>

                {/* Facilities */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Facilities:</strong> {place.facilities.join(", ")}
                  </Card.Text>
                </Col>

                {/* Sports Available */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Sports Available:</strong> {place.sports.join(", ")}
                  </Card.Text>
                </Col>

                {/* Description */}
                <Col md={12} className="mb-3">
                  <Card.Text>
                    <strong>Description:</strong> {place.description}
                  </Card.Text>
                </Col>

                {/* Book Now Button */}
                <Col md={12} className="text-center">
                  <Button
                    className="custom-button"
                    variant="success"
                    onClick={handleBooking}
                  >
                    Proceed to Book
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PlaceDetails;