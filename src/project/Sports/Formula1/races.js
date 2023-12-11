import React, { useState, useEffect } from 'react';
import NavBar from './sideBarNav';
import { fetchRaces } from '../../SportsService'; // Assuming you have a function to fetch races
import './Races.css';
import { Link } from 'react-router-dom';

function Races() {
  const [date, setDate] = useState('');
  const [raceData, setRaceData] = useState(null);
  const [error, setError] = useState(null);
  const raceDates = ['2023-03-05', '2023-03-19', '2023-04-02', '2023-04-30', '2023-05-07']; // Add more dates as needed

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

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Races</h1>
        <hr />

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="date">Date:</label>
          <select
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          >
            <option value="">Select a date</option>
            {raceDates.map((raceDate) => (
              <option key={raceDate} value={raceDate}>
                {raceDate}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-secondary" onClick={handleSearch}>
          Search
        </button>

        {error && <p>{error}</p>}

        {raceData && (
          <div>
            <h2>Race Information</h2>
            {raceData.map((race) => (
              <div key={race.id} className="race-card">
                <p>
                  <b> {race.competition.name}</b>
                </p>
                <img src={race.circuit.image} alt={`Image of ${race.circuit.name}`} />
                <Link
                  to={`/project/Sports/formula1/races/${date}`}
                  className="user-link"
                >
                  Race Info
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Races;