import React, { useState } from 'react';
import { fetchDrivers } from '../../SportsService'; // Replace with the actual path to your API module
import { DRIVER_IMG } from '../../SportsService'; // Replace with the actual path to your image module
import  NavBar from './sideBarNav';

function Formula1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [driverData, setDriverData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchDrivers(searchTerm);
      setDriverData(data.response); // Assuming data.response contains the driver information
      setError(null);
    } catch (error) {
      setDriverData(null);
      setError('Error fetching driver data');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <NavBar />

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Formula 1</h1>
        <input
          type="text"
          placeholder="Search for drivers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        {error && <p>{error}</p>}

        {driverData && (
          <div>
            <h2>Driver Information</h2>
            {driverData.map((driver) => (
              <div key={driver.id}>
                <p>Name: {driver.name}</p>
                <img src={DRIVER_IMG(driver.id)} alt={`Image of ${driver.name}`} />
                {/* Add more information as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Formula1;
