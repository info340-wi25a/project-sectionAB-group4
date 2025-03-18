import { useState } from 'react';
import { Navigate } from 'react-router';
import { auth } from "../main";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup({ users, setUsers }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now login.");
      setRedirect(true);
    } catch (error) {
      setError(error.message);
    }
  };

  if (redirect) {
    return <Navigate to="/login" />
  }

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup} className="signup-form">
        {error ? <p className="error-message">{error}</p> : null}

        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value.toLowerCase())} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  )

}

export default Signup;