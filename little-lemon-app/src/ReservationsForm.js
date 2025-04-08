import { useState } from 'react';


const ReservationsForm = ({ availableTimes, updateTimes, submitAPI }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (name === 'date') {
      updateTimes(value);
      setFormData((prev) => ({ ...prev, time: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Please select a date.';
    if (!formData.time) newErrors.time = 'Please select a time.';
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'Enter number of guests.';
    if (!formData.occasion) newErrors.occasion = 'Please select an occasion.';
    return newErrors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await submitAPI(formData);
    }
  };

  return (
    <form className="res-form" onSubmit={handleSubmit}>
      <h1 className="res-title">Reservation Form</h1>
      <label className="res-label">Choose date:</label>
      <input
        className="res-input"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label className="res-label">Choose time:</label>
      <select
        className="res-input"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label className="res-label">Number of guests:</label>
      <input
        className="res-input"
        type="number"
        name="guests"
        min="1"
        max="10"
        placeholder='Min:1 Max:10'
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label className="res-label">Occasion:</label>
      <select
        className="res-input"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {errors.occasion && <div className="error">{errors.occasion}</div>}

      <button className="submit-btn" type="submit">
        Make Your Reservation
      </button>
    </form>
  );
}

export default ReservationsForm;
