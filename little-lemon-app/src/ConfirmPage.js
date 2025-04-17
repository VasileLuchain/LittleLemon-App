import React from 'react';


const ConfirmationPage = () => {
    const reservationData = JSON.parse(localStorage.getItem('latestReservation'));

    if (!reservationData) {
      return <p>No reservation found.</p>;
    }

    const { date, time, guests, occasion } = reservationData;

    return (
      <div className="confirmation-page">
        <h2>Reservation Confirmed! 🎉</h2>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Guests:</strong> {guests}</p>
        <p><strong>Occasion:</strong> {occasion}</p>
      </div>
    );
  };

  export default ConfirmationPage;