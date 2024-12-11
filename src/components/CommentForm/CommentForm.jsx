import { useState, useEffect } from 'react';
import * as foodService from '../../services/foodService';


const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData)
    setFormData({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="protein-input">Protein:</label>
      <input
          required
          type="protein"
          name="protein"
          id="protein-input"
          value={formData.protein}
          onChange={handleChange}
        />
     <label htmlFor="calories-input">Calories:</label>
      <input
          required
          type="calories"
          name="calories"
          id="calories-input"
          value={formData.calories}
          onChange={handleChange}
        />
    <label htmlFor="fats-input">Fats:</label>
      <input
          required
          type="fats"
          name="fats"
          id="fats-input"
          value={formData.fats}
          onChange={handleChange}
        />
    <label htmlFor="carbs-input">Carbs:</label>
      <input
          required
          type="carbs"
          name="carbs"
          id="carbs-input"
          value={formData.carbs}
          onChange={handleChange}
        />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default CommentForm;
