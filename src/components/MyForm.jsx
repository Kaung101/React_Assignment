import React, { useState } from 'react';

export default function MyForm() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
    function handleSubmit(e) {
        e.preventDefault();

        if (!/^[0-9]{10}$/.test(phoneNumber)) {
        setFormError('Please enter a valid phone number.');
        return;
        }

        alert(`Email: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nPassword: ${password}`);
        setFormError('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Register</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter FirstName"/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter LastName"/>
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="tel" pattern="[0-9]{10}" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number"/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
      </div>
      {formError && <p>{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
