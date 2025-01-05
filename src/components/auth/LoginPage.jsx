import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Link } from 'react-router-dom'; // For navigation to signup
import './AuthStyles.css'; // Add custom styles

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: email, password }).catch(() =>
      notify('Invalid email or password')
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src="/path-to-logo.png" alt="Rental Admin Logo" />
      </div>
      <h2 className="auth-header">Login</h2>
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
          Login
        </button>
      </form>
      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
