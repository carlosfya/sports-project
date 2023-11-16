// Search.js

import React, { useState, useEffect } from "react";
import { fetchTeamData, IMAGE_TEAM } from "../SportsService.js"; // Adjust the path based on your project structure

function Search() {
  const [teamId, setTeamId] = useState("");
  const [teamData, setTeamData] = useState(null);
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


      {teamData && (
        <div>
          <h2>Team Information</h2>
          <p>Team Name: {teamData.name}</p>
          {/* Add more details based on the API response */}
          {teamId && <img src={IMAGE_TEAM(teamId)} alt="Team" />}
        </div>
      )}
    </div>
  );
}

export default Search;
