// Account.js

import React, { useEffect, useState } from 'react';
import { searchPlayers } from '../Service2';

function Account() {
  const [teamName, setTeamName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await searchPlayers(teamName, playerName);
      setPlayerData(data.player);

    } catch (error) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (teamName !== '' && playerName !== '') {
      fetchData();
    }
  }, [teamName, playerName]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h2>Player Search</h2>

      <label htmlFor="teamName">Team Name:</label>
      <input
        type="text"
        id="teamName"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Enter Team Name"
      />

      <label htmlFor="playerName">Player Name:</label>
      <input
        type="text"
        id="playerName"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter Player Name"
      />

      <button onClick={fetchData} disabled={loading}>
        Search Players
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {playerData && (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {playerData.map((player) => (
            <div key={player.idPlayer} className="col">
              <div className="card h-100" onClick={() => handlePlayerClick(player)}>
                <img src={player.strThumb} className="card-img-top" alt={player.strPlayer} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                <div className="card-body">
                  <h5 className="card-title">{player.strPlayer}</h5>
                  <p className="card-text">{player.strPosition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedPlayer && (
        <div>
          <h3>Selected Player Information:</h3>
          <div>
            <h5>{selectedPlayer.strPlayer}</h5>
            <p>Position: {selectedPlayer.strPosition}</p>
            <p>Nationality: {selectedPlayer.strNationality}</p>
            {/* Add more player information as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
