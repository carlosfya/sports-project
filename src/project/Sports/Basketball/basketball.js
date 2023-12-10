import React, { useState, useEffect } from 'react';
import { fetchBasketballTeams, fetchBasketballStandings, fetchBasketballData } from '../../SportsService';
import NavBar from './sideBarNav';

function Basketball() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('2021-2022');
  const [teamData, setTeamData] = useState(null);
  const [error, setError] = useState(null);
  const [likedTeams, setLikedTeams] = useState({});
  const [standingsData, setStandingsData] = useState(null);
  const [highlightedTeamId, setHighlightedTeamId] = useState(null);
  const [additionalBasketballData, setAdditionalBasketballData] = useState(null);

  const fetchNBAStandings = async () => {
    try {
      const standings = await fetchBasketballStandings("12", selectedYear);
      setStandingsData(standings.response[0]); 
    } catch (error) {
      setError('Error fetching NBA standings');
    }
  };

  const handleSearch = async () => {
    try {
      const data = await fetchBasketballTeams(searchTerm);
      setTeamData(data.response);
      setError(null);
      const searchedTeam = data.response[0];
      setHighlightedTeamId(searchedTeam?.id);
    } catch (error) {
      setTeamData(null);
      setError('Error fetching team data');
    }
  };

  const handleLikeClick = (teamId) => {
    setLikedTeams({ ...likedTeams, [teamId]: true });
  };

  const handleDislikeClick = (teamId) => {
    const updatedLikes = { ...likedTeams };
    delete updatedLikes[teamId];
    setLikedTeams(updatedLikes);
  };

  useEffect(() => {
    fetchNBAStandings();

    const fetchAdditionalData = async () => {
      try {
        const additionalData = await fetchBasketballData('your-endpoint', { param1: 'value1', param2: 'value2' });
        setAdditionalBasketballData(additionalData);
      } catch (error) {
        console.error('Error fetching additional basketball data:', error);
      }
    };

    fetchAdditionalData();
  }, [selectedYear]);

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>NBA Teams and Standings</h1>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search for teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={{ marginRight: '10px', padding: '8px' }}
          >
            <option value="2022-2023">2022-2023</option>
            <option value="2021-2022">2021-2022</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2019-2020">2019-2020</option>
          </select>
          <button onClick={handleSearch} style={{ padding: '8px' }}>Search</button>
        </div>

        {error && <p>{error}</p>}
        {teamData && (
          <div>
            {teamData.map((team) => (
              <div key={team.id} className={`card ${highlightedTeamId === team.id ? 'highlighted' : ''}`} style={{width:400}}>
                <div className="card-body">
                  <img src={team.logo} alt={`${team.name} Logo`} style={{ height: '50px', marginRight: '10px' }} />
                  <p>Name: {team.name}</p>
                  <button
                    onClick={() => handleLikeClick(team.id)}
                    className="btn btn-primary like-button"
                    disabled={likedTeams[team.id]}
                  >
                    <span role="img" aria-label="heart">❤️</span> {likedTeams[team.id] ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {standingsData && (
          <div>
            <h2>Western Conference</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  <th>Games Played</th>
                  <th>Wins</th>
                  <th>Losses</th>
                </tr>
              </thead>
              <tbody>
                {standingsData.slice(0, 15).map((teamStanding) => (
                  <tr key={teamStanding.team?.id} className={highlightedTeamId === teamStanding.team?.id ? 'highlighted' : ''}>
                    <td>{teamStanding.position || 'N/A'}</td>
                    <td>
                      <img src={teamStanding.team?.logo} alt={`${teamStanding.team?.name} Logo`} style={{ height: '20px', marginRight: '5px' }} />
                      {teamStanding.team?.name || 'N/A'}
                    </td>
                    <td>{teamStanding.games?.played || 'N/A'}</td>
                    <td>{teamStanding.games?.win?.total || 'N/A'}</td>
                    <td>{teamStanding.games?.lose?.total || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>Eastern Conference</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  <th>Games Played</th>
                  <th>Wins</th>
                  <th>Losses</th>
                </tr>
              </thead>
              <tbody>
                {standingsData.slice(15, 30).map((teamStanding) => (
                  <tr key={teamStanding.team?.id} className={highlightedTeamId === teamStanding.team?.id ? 'highlighted' : ''}>
                    <td>{teamStanding.position || 'N/A'}</td>
                    <td>
                      <img src={teamStanding.team?.logo} alt={`${teamStanding.team?.name} Logo`} style={{ height: '20px', marginRight: '5px' }} />
                      {teamStanding.team?.name || 'N/A'}
                    </td>
                    <td>{teamStanding.games?.played || 'N/A'}</td>
                    <td>{teamStanding.games?.win?.total || 'N/A'}</td>
                    <td>{teamStanding.games?.lose?.total || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default Basketball;
