import { useState } from 'react';

const FoodForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    currentWeight: '',
    weightGoal: ''
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('formData', formData);
    // We'll update this function shortly...
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodName-input">Name</label>
        <input
          required
          type="foodName"
          name="foodName"
          id="foodName-input"
          value={formData.foodName}
          onChange={handleChange}
        />
        <label htmlFor="date-input">Date</label>
        <textarea
          required
          type="date"
          name="date"
          id="date-input"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="time-input">Time</label>
        <input
          required
          name="time"
          id="time-input"
          value={formData.time}
          onChange={handleChange}
       />
       <label htmlFor="currentWeight-input">Current Weight</label>
        <input
          required
          name="currentWeight"
          id="currentWeight-input"
          value={formData.currentWeight}
          onChange={handleChange}
       />
       <label htmlFor="weightGoal-input">Weight Goal</label>
        <input
          required
          name="weightGoal"
          id="weightGoal-input"
          value={formData.weightGoal}
          onChange={handleChange}
       />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default FoodForm;