import './index.css';
import descImg from "./Images/restaurant.jpg";

import React, { useState } from "react";
import ReservationForm from './ReservationsForm';


const Reservation = () => {
    const [reservationData, setReservationData] = useState(null);

    const handleFormSubmit = (data) => {
        setReservationData(data);
        console.log("Reservation Data Received:", data);
    };


    return (
        <main className='booking-page'>
            <section className='hero-bg'>
                <header className='hero-head'>
                <h1 className='hero-title'>Little Lemon</h1>
                    <h3 className='hero-sub'>Chicago</h3>
                    <p className='hero-desc'>Reserve one from our finest dining tables.
                        Come in and enjoy the atmosphere of the little lemon
                        restaurant, and see what great food is all about.
                    </p>
                </header>
                <img src={descImg} className='desc-img' alt='Header'/>
            </section>
            <section className='form-sec'>
                <ReservationForm onFormSubmit={handleFormSubmit}/>
                {reservationData && (
                    <section className="reservation-summary">
                        <h3>Reservation Summary</h3>
                        <p><strong>Date:</strong> {reservationData.date}</p>
                        <p><strong>Time:</strong> {reservationData.time}</p>
                        <p><strong>No. of Guests:</strong> {reservationData.guests}</p>
                        <p><strong>occation:</strong> {reservationData.occation}</p>
                    </section>
                )}
            </section>
        </main>
    )
}
export default Reservation;