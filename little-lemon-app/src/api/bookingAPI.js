// Check if a date is a weekend (Saturday=6, Sunday=0)
const isWeekend = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

// Generate next 14 days of available times
const generateAvailableTimes = () => {
  const today = new Date();
  const result = {};

  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateString = date.toISOString().split('T')[0];

    //Assing time based on weekend / weekday
    if (isWeekend(date)) {
      result[dateString] = ['14:00', '15:00', '16:00'];
    } else {
      result[dateString] = ['10:00', '11:00', '12:00'];
    }
  }

  return result;
};

const availableTimesByDate = generateAvailableTimes();


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}