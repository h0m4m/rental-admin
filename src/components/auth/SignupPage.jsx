import React, { useState } from 'react';
import { useNotify } from 'react-admin';
import { supabaseClient } from '../../supabaseClient';
import { Link } from 'react-router-dom'; // For navigation to login
import './AuthStyles.css'; // Add custom styles

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const notify = useNotify();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
      notify(error.message, { type: 'error' });
    } else {
      notify('Signup successful! Please check your email to confirm your account.', { type: 'success' });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src="/path-to-logo.png" alt="Rental Admin Logo" />
      </div>
      <h2 className="auth-header">Sign Up</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>
      <div className="auth-footer">
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
