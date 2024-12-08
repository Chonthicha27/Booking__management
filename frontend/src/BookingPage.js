import React, { useState } from 'react';
import { Button, Form, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './BookingPage.css';  // เรียกใช้ CSS ที่จะออกแบบ

function BookingPage() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [roomType, setRoomType] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!roomType || !userDetails.name || !userDetails.email || !userDetails.phone) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน');
    } else {
      setError('');
      // ส่งข้อมูลการจองไปที่เซิร์ฟเวอร์หรือจัดการภายใน
      console.log('Booking details:', { checkInDate, checkOutDate, roomType, userDetails });
    }
  };

  return (
    <Container className="booking-container">
      <Row>
        <Col md={6}>
          <h2 className="title">Make a Booking</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCheckInDate">
              <Form.Label>Check-In Date</Form.Label>
              <DatePicker
                selected={checkInDate}
                onChange={date => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formCheckOutDate">
              <Form.Label>Check-Out Date</Form.Label>
              <DatePicker
                selected={checkOutDate}
                onChange={date => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={checkInDate}
                className="form-control"
              />
            </Form.Group>

            <Form.Group controlId="formRoomType">
              <Form.Label>Room Type</Form.Label>
              <Form.Control as="select" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option value="">Select Room</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                <option value="suite">Suite</option>
              </Form.Control>
            </Form.Group>

            <h3 className="subtitle">User Information</h3>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">Confirm Booking</Button>
          </Form>
        </Col>

        <Col md={6}>
          <h3 className="room-summary-title">Room Summary</h3>
          <Card className="room-summary-card">
            <Card.Body>
              <Card.Title>{roomType ? roomType.charAt(0).toUpperCase() + roomType.slice(1) : 'Select a room'}</Card.Title>
              <p>Check-in: {checkInDate.toLocaleDateString()}</p>
              <p>Check-out: {checkOutDate.toLocaleDateString()}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BookingPage;
