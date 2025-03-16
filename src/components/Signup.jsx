import { useState } from 'react';
import { Navigate } from 'react-router';
import { auth } from "../main";
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup({ users, setUsers }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [locationState, setLocationState] = useState('');
  // const [locationCity, setLocationCity] = useState('');
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

  //   const lowerEmail = email.toLowerCase();

  //   const emailExists = users.some(user => user.email === lowerEmail);

  //   if (emailExists) {
  //     setError('Email already exists. Please login instead');
  //   } else {
  //     const nextUserId = users.length + 1;

  //     const newUser = {
  //       userId: nextUserId, // Assign unique ID to user
  //       email: lowerEmail,
  //       password,
  //       firstName: firstName.toUpperCase(),
  //       lastName: lastName.toUpperCase(),
  //       locationState: locationState.toUpperCase(),
  //       locationCity: locationCity.toUpperCase()
  //     };
  //     console.log([...users, newUser ]);
  //     setUsers([...users, newUser]);
  //     setError('');
  //     alert('Signup successful! You can now login.');
  //     setRedirect(true);
  //   }
  // };

  if (redirect) {
    return <Navigate to="/login" />
  }

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        {error ? <p className="error-message">{error}</p> : null}

        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value.toLowerCase())} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />

        {/* <label>First Name:</label>
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />

        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} required />

        <label>State:</label>
        <input type="text" value={locationState} onChange={(event) => setLocationState(event.target.value.trim())} required />

        <label>City:</label>
        <input type="text" value={locationCity} onChange={(event) => setLocationCity(event.target.value.trim())} required /> */}

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  )

}

export default Signup;