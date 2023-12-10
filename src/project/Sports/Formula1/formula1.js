import React, { useState } from 'react';
import { fetchDrivers, DRIVER_IMG } from '../../SportsService'; // Adjust the import paths as needed
import NavBar from './sideBarNav';

function Formula1() {
  const [searchTerm, setSearchTerm] = useState('');
  const [driverData, setDriverData] = useState(null);
  const [error, setError] = useState(null);
  const [likedDrivers, setLikedDrivers] = useState({});

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

  const handleLikeClick = (driverId) => {
    setLikedDrivers({ ...likedDrivers, [driverId]: true });
  };

  const handleDislikeClick = (driverId) => {
    const updatedLikes = { ...likedDrivers };
    delete updatedLikes[driverId];
    setLikedDrivers(updatedLikes);
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
              <div key={driver.id} className="card">
                <div className="card-body">
                  <p>Name: {driver.name}</p>
                  <img src={DRIVER_IMG(driver.id)} alt={`Image of ${driver.firstName} ${driver.lastName}`} />
                  {/* Add more information as needed */}
                  <button
                    onClick={() => handleLikeClick(driver.id)}
                    className="btn btn-primary like-button"
                    disabled={likedDrivers[driver.id]}
                  >
                    <span role="img" aria-label="heart">❤️</span> {likedDrivers[driver.id] ? 'Liked' : 'Like'}
                  </button>
                  <button
                    onClick={() => handleDislikeClick(driver.id)}
                    className="btn btn-danger dislike-button"
                  >
                    <span role="img" aria-label="thumbs-down">👎</span> Dislike
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Formula1;
