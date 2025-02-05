//  import React from "react";
//  import { useLocation } from "react-router-dom";
// import { Container, Card, Button } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';

//  const PlaceDetails = () => {
//   const location = useLocation();
//   const { place } = location.state; // Access the passed data

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//          <p className="text-center">Please try booking another place.</p>
//        </Container>
//      );
//    }

//   return (
//    <Container className="mt-4">
//      <h1 className="text-center mb-4">{place.name}</h1>
//        <Card className="custom-card">
//          <div className="custom-card-flex">
//                      <div style={{ width: "50%", margin: "auto" }}>
//              {/* <Card.Img
//               variant="top"
//              src={place.image}
//               className="custom-card-img"
//             /> */}
//             <Carousel>
//                 {place.images.map((image,index)=>(         
//                              <Carousel.Item key={index}>
//                         <img className="d-bloack w-100" src={image} alt="iamges"/>
//                          <Carousel.Caption>
//                      <h5>{place.name}</h5>
//                    <p>Slide {index + 1}</p>
//                    </Carousel.Caption>
//                    </Carousel.Item>
                    
//                 ))}
//            </Carousel>
//          </div>
//          <div>
//                  <Card.Body className="custom-card-body">
//                <Card.Text>
//                  <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>             <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities.join(", ")}
//           </Card.Text>
//           <Button variant="success">Proceed to Book</Button>
//          </Card.Body>
//        </div>
//        </div>
//       </Card>
//     </Container>
//    );
// };

// export default PlaceDetails;








// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Card, Button, Form } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { jsPDF } from "jspdf";

// const PlaceDetails1 = () => {
//   const location = useLocation();
//   const { place } = location.state; // Access the passed data

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [showBookingDetails, setShowBookingDetails] = useState(false);

//   if (!place) {
//     return (
//       <Container className="mt-4">
//         <h1 className="text-center text-danger">Place Not Found</h1>
//         <p className="text-center">Please try booking another place.</p>
//       </Container>
//     );
//   }

//   const handleBookClick = () => {
//     setShowBookingDetails(true);
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleGenerateBill = () => {
//     const doc = new jsPDF();

//     // Add content to the PDF
//     doc.setFontSize(20);
//     doc.text("Booking Confirmation", 10, 20);

//     doc.setFontSize(14);
//     doc.text(`Place: ${place.name}`, 10, 40);
//     doc.text(`Address: ${place.address}`, 10, 50);
//     doc.text(`Date & Time: ${selectedDate}`, 10, 60);
//     doc.text(`Payment Method: ${paymentMethod}`, 10, 70);
//     doc.text(`Total Cost: ₹${place.pricePerHour}`, 10, 80);

//     // Save the PDF
//     doc.save("Booking_Confirmation.pdf");
//   };

//   return (
//     <Container className="mt-4">
//       <h1 className="text-center mb-4">{place.name}</h1>
//       <Card className="custom-card">
//         <div className="custom-card-flex">
//           <div style={{ width: "50%", margin: "auto" }}>
//             <Carousel>
//               {place.images?.map((image, index) => (
//                 <Carousel.Item key={index}>
//                   <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
//                   <Carousel.Caption>
//                     <h5>{place.name}</h5>
//                     <p>Slide {index + 1}</p>
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//           <div>
//             <Card.Body className="custom-card-body">
//               <Card.Text>
//                 <strong>Address:</strong> {place.address}
//               </Card.Text>
//               <Card.Text>{place.description}</Card.Text>
//               <Card.Text>
//                 <strong>Price per hour:</strong> ₹{place.pricePerHour}
//               </Card.Text>
//               <Card.Text>
//                 <strong>Facilities:</strong> {place.facilities?.join(", ")}
//               </Card.Text>
//             </Card.Body>
//           </div>
//         </div>
//       </Card>

//       {/* Select Schedule Section */}
//       <Card className="mt-4">
//         <Card.Header>
//           <h4>Select Your Schedule</h4>
//         </Card.Header>
//         <Card.Body>
//           <Button  variant="primary" onClick={handleBookClick}>
//             Book Now
//           </Button>
//         </Card.Body>
//       </Card>

//       {/* Show Booking Details and Payment Method after Clicking Book */}
//       {showBookingDetails && (
//         <>
//           <Card className="mt-4">
//             <Card.Header>
//               <h4>Select Date and Time</h4>
//             </Card.Header>
//             <Card.Body>
//               <Form.Group>
//                 <Form.Label>Select Date and Time</Form.Label>
//                 <DatePicker
//                   selected={selectedDate}
//                   onChange={(date) => setSelectedDate(date)}
//                   showTimeSelect
//                   dateFormat="Pp"
//                   className="form-control"
//                 />
//               </Form.Group>
//             </Card.Body>
//           </Card>

//           <Card className="mt-4">
//             <Card.Header>
//               <h4>Select Payment Method</h4>
//             </Card.Header>
//             <Card.Body>
//               <Form>
//                 <Form.Check
//                   type="radio"
//                   label="Credit Card"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Credit Card")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="UPI"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("UPI")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Wallet"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Wallet")}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="Net Banking"
//                   name="paymentMethod"
//                   onChange={() => handlePaymentMethodChange("Net Banking")}
//                 />
//               </Form>
//             </Card.Body>
//           </Card>

//           {selectedDate && paymentMethod && (
//             <Card className="mt-4">
//               <Card.Body>
//                 <h5 className="text-center">
//                   <strong>Booking Confirmation</strong>
//                 </h5>
//                 <p>
//                   <strong>Date & Time:</strong> {selectedDate.toString()}
//                 </p>
//                 <p>
//                   <strong>Payment Method:</strong> {paymentMethod}
//                 </p>
//                 <p>
//                   <strong>Total Cost:</strong> ₹{place.pricePerHour}
//                 </p>
//                 <div className="text-center">
//                   <Button variant="success" onClick={handleGenerateBill}>
//                     Confirm and Generate Bill
//                   </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           )}
//         </>
//       )}
//     </Container>
//   );
// };

// export default PlaceDetails1; sucess


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Button, Form } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { jsPDF } from "jspdf";

const PlaceDetails1 = () => {
  const location = useLocation();
  const { place } = location.state; // Access the passed data

  const [selectedDate, setSelectedDate] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showBookingDetails, setShowBookingDetails] = useState(false);

  if (!place) {
    return (
      <Container className="mt-4">
        <h1 className="text-center text-danger">Place Not Found</h1>
        <p className="text-center">Please try booking another place.</p>
      </Container>
    );
  }

  const handleBookClick = () => {
    setShowBookingDetails(true);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleGenerateBill = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(20);
    doc.text("Booking Confirmation", 10, 20);

    doc.setFontSize(14);
    doc.text(`Place: ${place.name}`, 10, 40);
    doc.text(`Address: ${place.address}`, 10, 50);
    doc.text(`Date & Time: ${selectedDate}`, 10, 60);
    doc.text(`Payment Method: ${paymentMethod}`, 10, 70);
    doc.text(`Total Cost: ₹${place.pricePerHour}`, 10, 80);

    // Save the PDF
    doc.save("Booking_Confirmation.pdf");
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">{place.name}</h1>
      <Card className="custom-card">
        <div className="custom-card-flex">
          <div style={{ width: "50%", margin: "auto" }}>
            <Carousel>
              {place.images?.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
                  <Carousel.Caption>
                    <h5>{place.name}</h5>
                    <p>Slide {index + 1}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div>
            <Card.Body className="custom-card-body">
              <Card.Text>
                <strong>Address:</strong> {place.address}
              </Card.Text>
              <Card.Text>{place.description}</Card.Text>
              <Card.Text>
                <strong>Price per hour:</strong> ₹{place.pricePerHour}
              </Card.Text>
              <Card.Text>
                <strong>Facilities:</strong> {place.facilities?.join(", ")}
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>

      {/* Select Schedule Section */}
      <Card className="mt-4">
        <Card.Header>
          <h4>Select Your Schedule</h4>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={handleBookClick}
              style={{
                height: "40px",  // Reduced height
                width: "150px",  // Reduced width
                fontSize: "16px", // Adjusted font size
                fontWeight: "bold",
                backgroundColor: "#FF5733", // Custom color (e.g., orange-red)
                borderColor: "#FF5733", // Match the border color
              
              }}
            >
              Book Now
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* Show Booking Details and Payment Method after Clicking Book */}
      {showBookingDetails && (
        <>
          <Card className="mt-4">
            <Card.Header>
              <h4>Select Date and Time</h4>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Select Date and Time</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="form-control"
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header>
              <h4>Select Payment Method</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Check
                  type="radio"
                  label="Credit Card"
                  name="paymentMethod"
                  onChange={() => handlePaymentMethodChange("Credit Card")}
                />
                <Form.Check
                  type="radio"
                  label="UPI"
                  name="paymentMethod"
                  onChange={() => handlePaymentMethodChange("UPI")}
                />
                <Form.Check
                  type="radio"
                  label="Wallet"
                  name="paymentMethod"
                  onChange={() => handlePaymentMethodChange("Wallet")}
                />
                <Form.Check
                  type="radio"
                  label="Net Banking"
                  name="paymentMethod"
                  onChange={() => handlePaymentMethodChange("Net Banking")}
                />
              </Form>
            </Card.Body>
          </Card>

          {selectedDate && paymentMethod && (
            <Card className="mt-4">
              <Card.Body>
                <h5 className="text-center">
                  <strong>Booking Confirmation</strong>
                </h5>
                <p>
                  <strong>Date & Time:</strong> {selectedDate.toString()}
                </p>
                <p>
                  <strong>Payment Method:</strong> {paymentMethod}
                </p>
                <p>
                  <strong>Total Cost:</strong> ₹{place.pricePerHour}
                </p>
                <div className="text-center">
                  <Button variant="success" onClick={handleGenerateBill}>
                    Confirm and Generate Bill
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </>
      )}
    </Container>
  );
};

export default PlaceDetails1;

