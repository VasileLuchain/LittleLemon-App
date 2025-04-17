import React from 'react';

const ConfirmationPage = () => {
  const reservations = JSON.parse(localStorage.getItem('reservationsList')) || [];

  if (reservations.length === 0) {
    return <p className="confirmation-page">No reservations found.</p>;
  }

  return (
    <div className="confirmation-page">
      {reservations.map((res, index) => (
        <div key={index} className="reservation-card">
          <h2>Reservation Confirmed!!</h2>
          <p><strong>Date:</strong> {res.date}</p>
          <p><strong>Time:</strong> {res.time}</p>
          <p><strong>No. of Guests:</strong> {res.guests}</p>
          <p><strong>Occasion:</strong> {res.occasion}</p>
        </div>
      ))}
    </div>
  );
};

export default ConfirmationPage;
