// Races.js

import React, { useState, useEffect } from 'react';
import NavBar from './sideBarNav';
import { fetchRaces } from '../../SportsService';  // Import your fetchRaces function
import './Races.css'; // Import the CSS file for Races
import { useParams  } from 'react-router-dom';


function RaceInfo() {
  const { date } = useParams();
  const [raceData, setRaceData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchRaces(date);
      setRaceData(data.response);
      setError(null);
    } catch (error) {
      setRaceData(null);
      setError('Error fetching race data');
    }
  };

  useEffect(() => {
    handleSearch(); // Fetch races when the component mounts
  }, [date]);

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Race Info</h1>
        <hr />

        {error && <p>{error}</p>}

        {raceData && (
          <div>
            <h2>Race Information</h2>
            {raceData.map((race) => (
              <div key={race.id} className="race-card">
                <img src={race.circuit.image} alt={`Image of ${race.circuit.name}`} />
                <p>Race Name: {race.competition.name}</p>
                <p>Location: {race.competition.location.locality}, {race.competition.location.country}</p>
                <p>Date: {new Date(race.date).toLocaleDateString()}</p>
                <p>Distance: {race.distance}</p>
                <p>Status: {race.status}</p>
                <p>Season: {race.season}</p>
                <p>Laps: {race.laps.total}</p>
                {race.fastest_lap && (
                  <p>Fastest Lap: {race.fastest_lap.time} by driverId:{race.fastest_lap.driver.id}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RaceInfo;
