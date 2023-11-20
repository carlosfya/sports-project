import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM, fetchLiveMatches } from "../SportsService.js"; // Adjust the path based on your project structure

function Search() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (teamId) {
      const fetchData = async () => {
        try {
          const data = await fetchTeamData("teams", teamId);
          setTeamData(data);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchData();
    }
  }, [teamId]);

  const handleInputChange = (e) => {
    setTeamId(e.target.value);
  };

  const handleFetchLiveMatches = async () => {
    try {
      const liveMatchesData = await fetchLiveMatches();
      setLiveMatches(liveMatchesData.response);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <p>Api: {apiKey}</p>

      <label htmlFor="teamId">Enter Team ID:</label>
      <input
        type="text"
        id="teamId"
        value={teamId}
        onChange={handleInputChange}
        placeholder="Enter team ID"
      />

      <button onClick={handleFetchLiveMatches}>Fetch Live Matches</button>

      {teamData && (
        <div>
          <h2>Team Information</h2>
          <p>Team Name: {teamData.name}</p>
          {teamId && <img src={IMAGE_TEAM(teamId)} alt="Team" />}
        </div>
      )}

      <h2>Live Matches</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {liveMatches.map((match, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <div>
              <p>Team: {match.teams.home.name} vs {match.teams.away.name}</p>
              <img src={IMAGE_TEAM(match.teams.home.id)} alt={`Logo of ${match.teams.home.name}`} />
              <img src={IMAGE_TEAM(match.teams.away.id)} alt={`Logo of ${match.teams.away.name}`} />

              {/* Display the live score for the match */}
              <div>
                <h3>Live Score</h3>
                {match.score.halftime.home !== null && match.score.halftime.away !== null ? (
                  <p>Halftime: {match.score.halftime.home} - {match.score.halftime.away}</p>
                ) : (
                  <p>In Progress</p>
                )}
                {match.score.fulltime.home !== null && match.score.fulltime.away !== null ? (
                  <p>Fulltime: {match.score.fulltime.home} - {match.score.fulltime.away}</p>
                ) : (
                  <p>Final Score</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Search;
