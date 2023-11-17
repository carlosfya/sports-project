import React, { useState } from 'react';
import "./index.css"
import { RiAccountCircleLine } from "react-icons/ri";

function Account() {
  const [userInfo, setUserInfo] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
  });

  // State to manage form input values
  const [formValues, setFormValues] = useState({
    username: userInfo.username,
    email: userInfo.email,
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user information with the form values
    setUserInfo({
      ...userInfo,
      ...formValues,
    });
    // You may want to send a request to the server to update the user's information here
    alert('Profile updated successfully!');
  };

  return (
    <div className='account-container'>
      <h1 className='account-title'>Account</h1>
      <hr/>
      <table className='table'>
          <td>
            <form onSubmit={handleSubmit}>
        <label style={{width: '100%'}}>
          <b> Username:</b>
          <input
            style={{backgroundColor:'rgb(206, 199, 199)'}}
            type="text"
            name="username"
            className='form-control'
            value={formValues.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label style={{width: '100%'}}>
        <b> Email:</b>
          <input
            style={{backgroundColor:'rgb(206, 199, 199)'}}
            type="email"
            name="email"
            className='form-control'
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Add more form fields for other user information */}
        <button type="submit" className='btn btn-secondary'>Update Profile</button>
            </form>
          </td>
          <td style={{textAlign: 'center'}}>
          <RiAccountCircleLine size={200} />
          </td>
      </table>
    </div>
  );
}

export default Account;
