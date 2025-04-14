import { useState, useEffect } from 'react';


const ReservationsForm = ({ availableTimes, updateTimes, submitAPI }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (formData.date) {
      updateTimes(formData.date);
    }
  }, [formData.date, updateTimes]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const fieldError = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));

    // Check if the form is valid now
    checkFormValidity({ ...formData, [name]: value });
  };

  const checkFormValidity = (data) => {
    const allFieldsFilled = data.date && data.time && data.guests && data.occasion;
    const noErrors = Object.values(errors).every((err) => !err);
    setIsFormValid(allFieldsFilled && noErrors);
  };

  const validate = () => {
    const fields = ['date', 'time', 'guests', 'occasion'];
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field];
      const error = validateField(field, value, true); // pass silent flag
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const validateField = (name, value, silent = false) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 14);

    let error = "";

    switch (name) {
      case "date":
        if (!value) {
          error = "Date is required";
        } else {
          const selectedDate = new Date(value);
          selectedDate.setHours(0, 0, 0, 0);
          if (selectedDate < today) {
            error = "Please select a date starting from today.";
          } else if (selectedDate > maxDate) {
            error = "Please select a date within the next 2 weeks.";
          }
        }
        break;

      case "time":
        if (!value) {
          error = "Please select a time";
        }
        break;

      case "guests":
        const guests = Number(value);
        if (!value || guests < 1 || guests > 10) {
          error = "Please enter a number of guests between 1 and 10";
        }
        break;

      case "occasion":
        if (!value || value === "Please Select") {
          error = "Please select an occasion";
        }
        break;

        default:
          error = "";
          break;
    }

    if (!silent) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }

    return error;
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
      <legend className="res-title">Reservation Form</legend>
      <label htmlFor="date" className="res-label">Choose date:</label>
      <input
        className="res-input"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time" className="res-label">Choose time:</label>
      <select
        className="res-input"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Please select</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {errors.time && <p className="error">{errors.time}</p>}

      <label htmlFor="guests" className="res-label">Number of guests:</label>
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
      {errors.guests && <p className="error">{errors.guests}</p>}

      <label htmlFor="occation" className="res-label">Occasion:</label>
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

      <button className="submit-btn" type="submit" disabled={!isFormValid}>
        Make Your Reservation
      </button>
    </form>
  );
}

export default ReservationsForm;
