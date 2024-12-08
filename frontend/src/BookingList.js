import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookingItem from './BookingItem';

const BookingList = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:5000/bookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <Link to="/add-booking">
        <Button variant="primary">Add New Booking</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer Name</th>
            <th>Check-in Date</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <BookingItem key={booking.booking_id} booking={booking} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingList;
