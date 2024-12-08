import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBookings = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    check_in_date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams); // เรียกใช้ onSearch จาก props
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={searchParams.location}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="check_in_date">
        <Form.Label>Check-in Date</Form.Label>
        <Form.Control
          type="date"
          name="check_in_date"
          value={searchParams.check_in_date}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBookings;
