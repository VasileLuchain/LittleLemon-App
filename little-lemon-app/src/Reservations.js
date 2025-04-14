import './index.css';
import descImg from "./Images/restaurant.jpg";
import React, { useReducer } from "react";
import ReservationsForm from './ReservationsForm';
import { fetchAPI, submitAPI } from './api/bookingAPI';
import { useNavigate } from 'react-router-dom';


const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
  };

  function Reservations() {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const navigate = useNavigate();

    const updateTimes = async (date) => {
        try {
          const times = await fetchAPI(date);
          dispatch({ type: 'UPDATE_TIMES', payload: times });
        } catch {
          dispatch({ type: 'UPDATE_TIMES', payload: [] });
        }
    };

    const handleFormSubmit = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
          localStorage.setItem('latestReservation', JSON.stringify(formData));
          navigate('/confirmation');
        }
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
            <section className='form-sec' aria-label='Reservation section'>
                <ReservationsForm
                    availableTimes={availableTimes}
                    updateTimes={updateTimes}
                    submitAPI={handleFormSubmit}
                />
            </section>
        </main>
    )
}
export default Reservations;