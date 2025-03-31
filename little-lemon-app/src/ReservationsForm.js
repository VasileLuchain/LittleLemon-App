import React, { useState } from "react";

const ReservationForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Please select a date.";
    if (!formData.time) newErrors.time = "Please select a time.";
    if (!formData.guests || formData.guests < 1 || formData.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    if (!formData.occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onFormSubmit(formData);
    }
  };

  return (
    <form className="res-form" onSubmit={handleSubmit}>

      {/* Date */}
      <label className="res-label" htmlFor="res-date">Date</label>
      <input
        className="res-input"
        type="date"
        id="res-date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      {errors.date && <p className="error">{errors.date}</p>}

      {/* Time */}
      <label className="res-label" htmlFor="res-time">Time</label>
      <select
        className="res-input"
        id="res-time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      >
        <option value="">Select Time</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      {/* Number of Guests */}
      <label className="res-label" htmlFor="guests">No. of Guests</label>
      <input
        className="res-input"
        type="number"
        id="guests"
        min="1"
        max="10"
        placeholder="Min: 1 Max: 10"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      />
      {errors.guests && <p className="error">{errors.guests}</p>}

      {/* Occasion */}
      <label className="res-label" htmlFor="occasion">Occasion</label>
      <select
        className="res-input"
        id="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <p className="error">{errors.occasion}</p>}

      {/* Submit Button */}
      <button className="submit-btn" type="submit">
        Submit Form
      </button>
    </form>
  );
};

export default ReservationForm;
