import React, { useEffect, useState } from 'react';
import { searchPlayers, searchTeams } from '../ServicePlayers';

function Players() {
  const [country, setCountry] = useState('Spain');
  const [teamName, setTeamName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [teamId, setTeamId] = useState(null); // New state to store team ID
  const [allTeams, setAllTeams] = useState(null); // New state to store all teams

  useEffect(() => {
    // URL of the API
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=${country}`;

    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Check if the 'teams' property exists in the response
        if (data.teams) {
          // Set all teams in the state
          setAllTeams(data.teams);
        } else {
          console.log('No teams found in the response.');
        }
      })
      .catch(error => console.error('Error fetching team data:', error));
  }, [country]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Use the new searchTeams function to get team information
      const teamInfo = await searchTeams(country, teamName);
      setTeamId(teamInfo.idTeam);
      console.log('Team Information:', teamInfo);

      const data = await searchPlayers(teamName, playerName);
      setPlayerData(data.player);
    } catch (error) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <div>
      <h2>Player Search</h2>

      {/* Display all team names with their IDs */}
      {allTeams && (
        <div>
          <h3>All Teams:</h3>
          <ul>
            {allTeams.map((team) => (
              <li key={team.idTeam}>{`${team.strTeam} - Team ID: ${team.idTeam}`}</li>
            ))}
          </ul>
        </div>
      )}

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

      {/* New input fields for specifying country and team */}
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter Country"
      />

      {/* Display team ID */}
      {teamId && <p>Team ID: {teamId}</p>}

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

export default Players;
