// Soccer.js
import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM, fetchLiveMatches } from "../SportsService2.js";


function Soccer() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [likedMatches, setLikedMatches] = useState({});
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liveMatchesData = await fetchLiveMatches();
        setLiveMatches(liveMatchesData.response);
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
    // Handle dislike button click for the specific match (implement your logic here)
    console.log(`Dislike button clicked for match ${matchId}`);
  };

  return (
    <div className="container">
      <div style={{ marginLeft: '80px', padding: '15px' }}>
        <h1>Soccer</h1>
      </div>
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

                {/* Like button */}
                <button
                  onClick={() => handleLikeClick(match.id)}
                  className="btn btn-primary like-button"
                  disabled={likedMatches[match.id]}
                >
                  <span role="img" aria-label="heart">❤️</span> {likedMatches[match.id] ? 'Liked' : 'Like'}
                </button>

                {/* Dislike button */}
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
  );
}

export default Soccer;


