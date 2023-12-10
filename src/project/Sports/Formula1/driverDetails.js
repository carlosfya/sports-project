// DriverDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDrivers } from '../../SportsService';
import './DriverDetails.css'; // Import the CSS file
import { useNavigate } from "react-router";

function DriverDetails() {
  const { driverTitle } = useParams();
  const [driverDetails, setDriverDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1); // Go back one step in the history
  };



  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        const details = await fetchDrivers(driverTitle);
        setDriverDetails(details.response);
        setError(null);
      } catch (error) {
        setDriverDetails(null);
        setError('Error fetching driver details');
      }
    };

    fetchDriverInfo();
  }, [driverTitle]);

  if (!driverDetails) {
    return <p>Loading...</p>; // You can customize the loading state
  }

  return (
    <div className="driver-details-container">
      <h2 className="details-title">Driver Information</h2>
      {driverDetails.map((driver) => (
        <div key={driver.id} className="driver-card">
          <img src={driver.image} alt={`Image of ${driver.name}`} className="driver-image" />
          <div className="driver-info">
            <h3 className="driver-name">{driver.name}</h3>
            <p className="driver-nationality">Nationality: {driver.nationality}</p>
            <p className="driver-birthdate">Birthdate: {driver.birthdate}</p>
            <p className="driver-birthplace">Birthplace: {driver.birthplace}</p>
            <p className="driver-career-points">Career Points: {driver.career_points}</p>
            <p className="driver-country">Country: {driver.country.name}</p>
            <p className="driver-grands-prix-entered">Grands Prix Entered: {driver.grands_prix_entered}</p>
            <p className="driver-highest-grid-position">Highest Grid Position: {driver.highest_grid_position}</p>
            <p className="driver-highest-race-finish">Highest Race Finish: {driver.highest_race_finish.position}</p>
          </div>
        </div>
      ))}
             <button
        type="button"
        className="btn btn-primary"
        onClick={handleReturn}
      >
        Return
      </button>
    </div>
  );
}

export default DriverDetails;
