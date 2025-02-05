import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Row, Col, Card, Alert } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaGooglePay, FaMobileAlt, FaCcVisa, FaCreditCard } from "react-icons/fa";
import "./BookingPage.css"; // Import custom CSS file

const BookingPage = () => {
  const [userName, setUserName] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const GST_PERCENTAGE = 18; // GST percentage

  const validateCardNumber = (value) => /^\d{16}$/.test(value);
  const validateExpiryDate = (value) => {
    const regex = /^\d{4}-\d{2}$/;
    if (!regex.test(value)) return false;

    const [year, month] = value.split("-").map(Number);
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    return year > currentYear || (year === currentYear && month >= currentMonth);
  };
  const validateCvv = (value) => /^\d{3}$/.test(value);
  const validateAmount = (value) => !isNaN(value) && parseFloat(value) > 0;

  const calculateGST = (baseAmount) => (baseAmount * GST_PERCENTAGE) / 100;

  const generateTransactionId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const generatePDF = (transactionId) => {
    const baseAmount = parseFloat(amount);
    const gstAmount = calculateGST(baseAmount);
    const totalAmount = baseAmount + gstAmount;

    const doc = new jsPDF();
    const logoUrl = "https://via.placeholder.com/100"; // Replace with your logo URL

    // Add logo and heading
    doc.addImage(logoUrl, "JPEG", 80, 10, 50, 30); // Add logo
    doc.setFontSize(20);
    doc.text("Booking Invoice", 95, 50);

    // Add table data
    doc.autoTable({
      startY: 60,
      head: [["Field", "Details"]],
      body: [
        ["Name", userName],
        ["Booking Date", bookingDate],
        ["Payment Method", paymentMethod],
        ["Transaction ID", transactionId],
        paymentMethod === "card" && ["Card Number", cardNumber.replace(/\d(?=\d{4})/g, "*")],
        ["Base Amount", `${baseAmount.toFixed(2)}`],
        ["GST (18%)", `${gstAmount.toFixed(2)}`],
        ["Total Amount", `${totalAmount.toFixed(2)}`],
      ].filter(Boolean),
      theme: "striped",
      styles: {
        fontSize: 12,
        cellPadding: 5,
        halign: "center",
      },
      headStyles: {
        fillColor: [22, 160, 133],
        textColor: 255,
        fontSize: 14,
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
    });

    // Add footer
    doc.setFontSize(14);
    doc.text("Thank You for Your Booking!", 80, doc.lastAutoTable.finalY + 20);
    doc.text("Visit Again!", 80, doc.lastAutoTable.finalY + 30);

    // Save the PDF
    doc.save("Booking_Invoice.pdf");
  };

  const handlePayment = (isCardPayment = false) => {
    if (!userName.trim()) {
      setAlertMessage("Please enter your name.");
      setShowAlert(true);
      return;
    }

    if (!bookingDate) {
      setAlertMessage("Please select a booking date.");
      setShowAlert(true);
      return;
    }

    if (!validateAmount(amount)) {
      setAlertMessage("Please enter a valid amount greater than 0.");
      setShowAlert(true);
      return;
    }

    if (isCardPayment) {
      if (!validateCardNumber(cardNumber)) {
        setAlertMessage("Please enter a valid 16-digit card number.");
        setShowAlert(true);
        return;
      }

      if (!validateExpiryDate(expiryDate)) {
        setAlertMessage("Please enter a valid expiry date.");
        setShowAlert(true);
        return;
      }

      if (!validateCvv(cvv)) {
        setAlertMessage("Please enter a valid CVV (3 digits).");
        setShowAlert(true);
        return;
      }
    }

    const transactionId = generateTransactionId();
    generatePDF(transactionId);
    setShowAlert(false);
  };

  return (
    <div
      className="booking-page-container"
      style={{
        background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Container className="booking-page" style={{ maxWidth: "600px", padding: "20px" }}>
        <h1 className="text-center mb-4" style={{ fontSize: "24px", fontWeight: "bold" }}>
          Booking Page
        </h1>
        {showAlert && (
          <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
        <Card className="booking-card" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="userName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="bookingDate" className="mb-3">
                <Form.Label>Booking Date</Form.Label>
                <Form.Control
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="amount" className="mb-3">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the amount (₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  isInvalid={amount && !validateAmount(amount)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid amount.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="paymentMethod" className="mb-3">
                <Form.Label>Payment Method</Form.Label>
                <Form.Control
                  as="select"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="card">Card (Visa, MasterCard, etc.)</option>
                  <option value="gpay">Google Pay</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="paytm">PayTM</option>
                </Form.Control>
              </Form.Group>

              {paymentMethod === "card" && (
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="cardNumber">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your card number"
                        value={cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 16) setCardNumber(value);
                        }}
                        isInvalid={cardNumber && !validateCardNumber(cardNumber)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid 16-digit card number.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mt-3">
                    <Form.Group controlId="expiryDate">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control
                        type="month"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        isInvalid={expiryDate && !validateExpiryDate(expiryDate)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid expiry date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={6} className="mt-3">
                    <Form.Group controlId="cvv">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 3) setCvv(value);
                        }}
                        isInvalid={cvv && !validateCvv(cvv)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid CVV (3 digits).
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              )}

              {paymentMethod === "gpay" && (
                <Row className="mb-3">
                  <Col md={12} className="d-flex justify-content-center">
                    <Button
                      variant="outline-dark"
                      className="w-100 payment-button"
                      onClick={() => handlePayment()}
                    >
                      <FaGooglePay className="me-2" /> Pay with Google Pay
                    </Button>
                  </Col>
                </Row>
              )}

              {paymentMethod === "phonepe" && (
                <Row className="mb-3">
                  <Col md={12} className="d-flex justify-content-center">
                    <Button
                      variant="outline-dark"
                      className="w-100 payment-button"
                      onClick={() => handlePayment()}
                    >
                      <FaMobileAlt className="me-2" /> Pay with PhonePe
                    </Button>
                  </Col>
                </Row>
              )}

              {paymentMethod === "paytm" && (
                <Row className="mb-3">
                  <Col md={12} className="d-flex justify-content-center">
                    <Button
                      variant="outline-dark"
                      className="w-100 payment-button"
                      onClick={() => handlePayment()}
                    >
                      <FaCcVisa className="me-2" /> Pay with PayTM
                    </Button>
                  </Col>
                </Row>
              )}

              {paymentMethod === "card" && (
                <Button
                className="confirm-button btn-sm"
                variant="primary"
                onClick={() => handlePayment(true)}
              >
                <FaCreditCard className="me-2" /> Confirm Booking
              </Button>
              
              )}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default BookingPage;