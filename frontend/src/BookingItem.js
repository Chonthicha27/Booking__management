import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // เพิ่มบรรทัดนี้

const BookingItem = ({ booking }) => {
  const handleCancel = () => {
    // ลบการจอง
    axios.delete(`http://localhost:5000/bookings/${booking.booking_id}`)
      .then(response => {
        alert('Booking canceled');
      })
      .catch(error => {
        console.error('Error canceling booking:', error);
      });
  };

  return (
    <tr>
      <td>{booking.booking_id}</td>
      <td>{booking.customer_name}</td>
      <td>{booking.check_in_date}</td>
      <td>{booking.location}</td>
      <td>
        <Link to={`/edit-booking/${booking.booking_id}`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <Button variant="danger" onClick={handleCancel}>Cancel</Button>
      </td>
    </tr>
  );
};

export default BookingItem;
