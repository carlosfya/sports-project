import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM, fetchLiveMatches, fetchPlayers, PLAYER_IMG } from "../SportsService.js";
import NavBar from "./sideBarNav.js";
import './Soccer.css'; // Import the CSS file for styling

function Soccer() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [likedMatches, setLikedMatches] = useState({});
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveMatchesData = await fetchLiveMatches();
        setLiveMatches(liveMatchesData.response);

        // Fetch players data
        const playersData = await fetchPlayers();
        setPlayers(playersData.response);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div className="soccer-container">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="content">
        <h1>Soccer</h1>
        <div className="live-matches">
          <h2>Live Matches</h2>
          <div className="card-container">
            {liveMatches.map((match, index) => (
              <div key={index} className="card">
                <div className="card-body">
                  <p>Team: {match.teams.home.name} vs {match.teams.away.name}</p>
                  <img src={IMAGE_TEAM(match.teams.home.id)} alt={`Logo of ${match.teams.home.name}`} />
                  <img src={IMAGE_TEAM(match.teams.away.id)} alt={`Logo of ${match.teams.away.name}`} />
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
                  <button
                    onClick={() => handleLikeClick(match.id)}
                    className="btn btn-primary like-button"
                    disabled={likedMatches[match.id]}
                  >
                    <span role="img" aria-label="heart">❤️</span> {likedMatches[match.id] ? 'Liked' : 'Like'}
                  </button>
                  <button onClick={() => handleDislikeClick(match.id)} className="btn btn-danger dislike-button">
                    <span role="img" aria-label="thumbs-down">👎</span> Dislike
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default Soccer;