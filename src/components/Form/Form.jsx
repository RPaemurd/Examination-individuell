import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  // Definiera lokal state för formulärdata med hjälp av useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Hantera ändringar som användaren fyller i formulärfält och uppdaterar formData med nya värdet
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // körs när formuläret skickas, just nu skickar vi bara formulärdatan till konsolen och återställer formulärdatan till tomma strängar efter inskickning.
  const handleSubmit = (event) => {
    event.preventDefault();
    // Använder formData för att göra något med inskickade data
    console.log('Form data submitted:', formData);
    // Återställer formulärdatan efter inskickning 
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form">
      
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          E-post:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <label>
          Meddelande:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />

        <button type="submit">Skicka</button>

      </form>
      
    </div>
  );
};

export default Form;
