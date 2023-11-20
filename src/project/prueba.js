// URL of the API
const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain';

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Check if the 'teams' property exists in the response
    if (data.teams) {
      // Display team names and IDs
      data.teams.forEach((team) => {
        console.log(`Team Name: ${team.strTeam}, Team ID: ${team.idTeam}`);
        // You can also display this information in your HTML or any other desired format
      });
    } else {
      console.log('No teams found in the response.');
    }
  })
  .catch(error => console.error('Error fetching data:', error));