import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './sideBarNav';

const BasketballGamesByDate = () => {
  const [selectedDate, setSelectedDate] = useState('2023-01-01');
  const [gamesData, setGamesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBasketballGamesByDate = async () => {
      try {
        const response = await axios.get('https://v1.basketball.api-sports.io/games', {
          headers: {
            'x-rapidapi-key': '21fb160e60fd0c8a05cb75b96098220e',
            'x-rapidapi-host': 'v1.basketball.api-sports.io',
          },
          params: {
            date: selectedDate,
          },
        });

        const data = response.data;
        console.log(data.response);
        setGamesData(data.response);
      } catch (error) {
        console.error('Error fetching basketball games:', error);
        setError('Error fetching basketball games');
      }
    };

    fetchBasketballGamesByDate();
  }, [selectedDate]);

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div style={{ flex: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Basketball Games by Date</h1>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: '8px', fontSize: '16px' }}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {gamesData.map((game) => (
            <div
              key={game.fixture}
              style={{
                width: '300px',
                margin: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '15px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ marginRight: '20px' }}>
                  <img
                    src={game.teams.home.logo}
                    alt={`${game.teams.home.name} Logo`}
                    style={{ height: '50px', width: '50px', marginRight: '10px' }}
                  />
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Home Team: {game.teams.home.name}</p>
                </div>
                <div>
                  <img
                    src={game.teams.away.logo}
                    alt={`${game.teams.away.name} Logo`}
                    style={{ height: '50px', width: '50px', marginRight: '10px' }}
                  />
                  <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>Away Team: {game.teams.away.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasketballGamesByDate;