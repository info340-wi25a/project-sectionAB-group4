import { useState } from 'react';
import { Navigate } from 'react-router';

function Login({ users, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the user exists and password matches
    const authenticatedUser = users.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

    if (authenticatedUser) {
      alert('Login successful! Redirecting to homepage...');

      setUser({
        userId: authenticatedUser.userId,
        email: authenticatedUser.email,
        firstName: authenticatedUser.firstName,
        lastName: authenticatedUser.lastName,
        locationState: authenticatedUser.locationState,
        locationCity: authenticatedUser.locationCity
      });

      setRedirect(true);
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error-message">{error}</p>}

        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

        <button type="submit" className="login-button">Login</button>

      </form>
    </div>
  );
}

export default Login;