import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBooking.css'; // เพิ่มไฟล์ CSS สำหรับ EditBooking

function EditBooking({ updateBooking }) {
  const { id } = useParams();
  const [customerName, setCustomerName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [status, setStatus] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const booking = { id, customer_name: 'Sample Name', booking_date: '2024-12-06', status: 'Confirmed' };
    setCustomerName(booking.customer_name);
    setBookingDate(booking.booking_date);
    setStatus(booking.status);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBooking = { id, customer_name: customerName, booking_date: bookingDate, status };
    updateBooking(updatedBooking);
    history('/');
  };

  return (
    <div className="form-container">
      <h2>Edit Booking</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Customer Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Booking Date:</label>
          <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </div>
        <button type="submit" className="submit-btn">Update Booking</button>
      </form>
    </div>
  );
}

export default EditBooking;
