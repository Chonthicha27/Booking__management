import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddBooking from './AddBooking';
import EditBooking from './EditBooking';
import './App.css'; // เพิ่มไฟล์ CSS สำหรับการตกแต่ง

function App() {
  const [bookings, setBookings] = useState([]);
  
  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };

  const deleteBooking = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const updateBooking = (updatedBooking) => {
    setBookings(bookings.map(booking =>
      booking.id === updatedBooking.id ? updatedBooking : booking
    ));
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Booking Management</h1>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link">Add Booking</Link>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <div className="booking-list">
                <h2>Booking List</h2>
                {bookings.length === 0 ? (
                  <p>No bookings yet.</p>
                ) : (
                  <ul>
                    {bookings.map((booking) => (
                      <li key={booking.id} className="booking-item">
                        <span>{booking.customer_name} - {booking.booking_date}</span>
                        <button onClick={() => deleteBooking(booking.id)} className="delete-btn">Delete</button>
                        <Link to={`/edit/${booking.id}`} className="edit-btn">Edit</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            } 
          />
          
          <Route 
            path="/add" 
            element={<AddBooking addBooking={addBooking} />} 
          />

          <Route 
            path="/edit/:id" 
            element={<EditBooking updateBooking={updateBooking} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
