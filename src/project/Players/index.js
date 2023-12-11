import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM, fetchLiveMatches, fetchPlayers, PLAYER_IMG } from "../SportsService.js";
import NavBar from "../Sports/sideBarNav.js";

function Players() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [likedMatches, setLikedMatches] = useState({});
  const [error, setError] = useState(null);
  const [selectedPlayerId, setSelectedPlayerId] = useState(""); // New state for selected player ID
  const [selectedSeason, setSelectedSeason] = useState(""); // New state for selected season
  const [playerIds, setPlayerIds] = useState(Array.from({ length: 300 }, (_, i) => (i + 1).toString())); // Generate player IDs from 1 to 300
  const [seasons, setSeasons] = useState(["2017", "2018", "2019", "2020"]); // Array of available seasons

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveMatchesData = await fetchLiveMatches();
        setLiveMatches(liveMatchesData.response);

        // Fetch players data with initial values
        const playersData = await fetchPlayers(selectedPlayerId, selectedSeason);
        setPlayers(playersData.response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [selectedPlayerId, selectedSeason]);

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

  const handleLikeClick = (matchId) => {
    if (!likedMatches[matchId]) {
      setLikedMatches((prevLikedMatches) => ({
        ...prevLikedMatches,
        [matchId]: true,
      }));
    }
  };

  const handleDislikeClick = (matchId) => {
    console.log(`Dislike button clicked for match ${matchId}`);
  };

  const handleSearchPlayers = async () => {
    try {
      const playersData = await fetchPlayers(selectedPlayerId, selectedSeason);
      setPlayers(playersData.response);
      setError(null);
    } catch (error) {
      setPlayers([]);
      setError(error.message);
    }
  };

  return (
    <div className="soccer-container">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="content">
        <h1>Soccer</h1>

        {/* Search Players Section */}
        <div className="search-players">
          <h2>Search Players</h2>
          <div className="search-form">
            {/* Player ID Dropdown */}
            <select
              value={selectedPlayerId}
              onChange={(e) => setSelectedPlayerId(e.target.value)}
            >
              <option value="">Select Player ID</option>
              {playerIds.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
            
            {/* Season Dropdown */}
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
            >
              <option value="">Select Season</option>
              {seasons.map((season) => (
                <option key={season} value={season}>
                  {season}
                </option>
              ))}
            </select>

            <button onClick={handleSearchPlayers} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
        {/* Players Section */}
        <div className="players">
          <h2>Players</h2>
          <div className="player-container">
            {players.map((player) => (
              <div key={player?.player?.id} className="player-card">
                <img src={PLAYER_IMG(player?.player?.id)} alt={`Image of ${player?.player?.name}`} />
                <p>{player?.player?.name}</p>
              </div>
            ))}
          </div>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Players;