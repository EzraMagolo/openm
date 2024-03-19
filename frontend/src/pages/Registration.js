import React, { useState } from 'react';
import registerUser from '../services/AuthService';
import '../assets/css/global.css';


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await registerUser(email, password);
      console.log('Registration successful, token:', token);
      // Redirect or show success message
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

