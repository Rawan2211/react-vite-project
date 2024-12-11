import "../App.css";
import "./styles.css";
import * as React from "react";
import { useState } from 'react';
import { login, LoginCredentials } from './api_link'; 
const InputField: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = await login(credentials); 
      document.cookie = `accessToken=${token}; path=/; SameSite=Strict; Secure`;
      localStorage.setItem('token', token); 
    } catch {
      console.error('An unexpected error occurred.'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default InputField;