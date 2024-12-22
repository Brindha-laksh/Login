import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      {isLogin ? <LoginForm /> : <RegistrationForm />}
      <button onClick={toggleForm} className="toggle-btn">
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful');
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

const RegistrationForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration Successful');
  };

  return (
    <form onSubmit={handleRegister} className="form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default App;
