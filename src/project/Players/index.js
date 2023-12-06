import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM, fetchLiveMatches, fetchPlayers, PLAYER_IMG } from "../SportsService.js";
import NavBar from "C:/Users/pablo/OneDrive/Bureau/northeastern/webdev/PROJECT3/sports-project/src/project/Sports/sideBarNav.js";

function Players() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [likedMatches, setLikedMatches] = useState({});
  const [error, setError] = useState(null);
  const [searchPlayerId, setSearchPlayerId] = useState("");
  const [searchSeason, setSearchSeason] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveMatchesData = await fetchLiveMatches();
        setLiveMatches(liveMatchesData.response);

        // Fetch players data with initial values
        const playersData = await fetchPlayers(searchPlayerId, searchSeason);
        setPlayers(playersData.response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchPlayerId, searchSeason]);

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
      const playersData = await fetchPlayers(searchPlayerId, searchSeason);
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
            <input
              type="text"
              placeholder="Player ID"
              value={searchPlayerId}
              onChange={(e) => setSearchPlayerId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Season"
              value={searchSeason}
              onChange={(e) => setSearchSeason(e.target.value)}
            />
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
              <div key={player.player.id} className="player-card">
                <img src={PLAYER_IMG(player.player.id)} alt={`Image of ${player.player.name}`} />
                <p>{player.player.name}</p>
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
