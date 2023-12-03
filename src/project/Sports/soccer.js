// Soccer.js
import React from 'react';
import NavBar from './sideBarNav'; // Import the NavBar component

function Soccer() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <div style={{ marginLeft: '80px', padding: '15px' }}>
        {/* Content of your Soccer component goes here */}
        <h1>Soccer</h1>
      </div>
    </div>
  );
}

export default Soccer;
