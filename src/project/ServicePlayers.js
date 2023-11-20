// api.js

const API_KEY = '3';

export async function searchTeams(country, teamName) {
  const apiUrl = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_teams.php?s=Soccer&c=${country}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Find the team with the specified name
    const team = data.teams.find((t) => t.strTeam === teamName);

    if (team) {
      return {
        teamId: team.idTeam,
        teamName: team.strTeam,
        country: team.strCountry,
        description: team.strDescriptionEN,
        // Add more properties as needed
      };
    } else {
      throw new Error(`Team '${teamName}' not found in ${country}`);
    }
  } catch (error) {
    console.error('Error fetching team data:', error);
    throw error;
  }
}

export async function searchPlayers(teamName, playerName) {
  const apiUrl = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=${teamName}&p=${playerName}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
