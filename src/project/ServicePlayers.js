// api.js

const API_KEY = '3';

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
