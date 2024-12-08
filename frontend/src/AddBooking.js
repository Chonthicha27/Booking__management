import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';

function AddBooking({ addBooking }) {
  const [customerName, setCustomerName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [status, setStatus] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { id: Date.now(), customer_name: customerName, booking_date: bookingDate, status };
    addBooking(newBooking);
    history('/');
  };

  return (
    <div className="form-container">
      <h2>Add Booking</h2>
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
        <button type="submit" className="submit-btn">Save Booking</button>
      </form>
    </div>
  );
}

export default AddBooking;
