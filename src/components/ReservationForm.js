import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  // State for success or error messages
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset error message

    try {
      // Post the form data to MockAPI.io
      const response = await axios.post('https://66ceaf60901aab24841f2c98.mockapi.io/api/kor/Reservations', formData);
      setMessage('Reservation was Made!'); // Set success message
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 }); // Clear form after submission
      console.log('Response from MockAPI:', response.data); // Log the response to see if it was successful
    } catch (error) {
      setError(`Error creating reservation: ${error.response ? error.response.data : error.message}`);
      console.error('Error during reservation creation:', error);
    }
  };

  return (
    <div className="container">
      <h1>Make a Reservation</h1>

      {/* Display success message */}
      {message && <div className="alert alert-success">{message}</div>}

      {/* Display error message */}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
          <label>Number of Guests:</label>
          <input type="number" name="guests" value={formData.guests} onChange={handleChange} className="form-control" required min="1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
