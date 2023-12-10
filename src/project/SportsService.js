import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
const SERVICE_API = "https://v3.football.api-sports.io/";
export const IMAGE_TEAM = (id) => `https://media-4.api-sports.io/football/teams/${id}.png`;
export const PLAYER_IMG = (player_id) => `https://media.api-sports.io/football/players/${player_id}.png`;
export const DRIVER_IMG = (player_id) => `https://media-4.api-sports.io/formula-1/drivers/${player_id}.png`;

export const fetchTeamData = async (endpoint, id) => {
  try {
    if (!KEY) {
      throw new Error("API key is missing.");
    }

    const response = await axios.get(`${SERVICE_API}${endpoint}`, {
      headers: {
        "x-rapidapi-key": KEY,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
      params: {
        id: id,
      },
    });

    const data = response.data;
    console.log(data.response[0].team);
    // Process and use the data as needed in your application
    return data.response[0].team; // Return the data so that it can be used by the calling code
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error for the calling code to handle
  }
};

// New function for fetching live football matches
export const fetchLiveMatches = async () => {
  try {
    if (!KEY) {
      throw new Error("API key is missing.");
    }

    const response = await axios.get("https://v3.football.api-sports.io/fixtures?live=all", {
      headers: {
        'x-rapidapi-key': KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
    });

    const data = response.data;
    console.log(data.response);
    // Process and use the live match data as needed in your application
    return data; // Return the data so that it can be used by the calling code
  } catch (error) {
    console.error('Error fetching live match data:', error);
    throw error; // Propagate the error for the calling code to handle
  }
};

export const fetchPlayers = async (searchPlayerId, searchSeason) => {
  try {
    if (!KEY) {
      throw new Error("API key is missing.");
    }

    const response = await axios.get("https://v3.football.api-sports.io/players/seasons", {
      headers: {
        'x-rapidapi-key': KEY,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      },
      params: {
        search: searchPlayerId,
      },
    });

    const data = response.data;
    console.log(data.response);
    // Process and use the live match data as needed in your application
    return data; // Return the data so that it can be used by the calling code
  } catch (error) {
    console.error('Error fetching live match data:', error);
    throw error; // Propagate the error for the calling code to handle
  }
};

export const fetchDrivers = async (searchTerm) => {
  try {
    if (!KEY) {
      throw new Error("API key is missing.");
    }

    const response = await axios.get(" https://v1.formula-1.api-sports.io/drivers", {
      headers: {
        'x-rapidapi-key': KEY,
        'x-rapidapi-host': 'api-formula-1.p.rapidapi.com'
      },
      params: {
        search: searchTerm,
      },
    });

    const data = response.data;
    console.log(data.response);
    // Process and use the live match data as needed in your application
    return data; // Return the data so that it can be used by the calling code
  } catch (error) {
    console.error('Error fetching driver:', error);
    throw error; // Propagate the error for the calling code to handle
  }
};



const API_KEY = KEY;
const BASE_URL = 'https://v1.basketball.api-sports.io';

export const fetchBasketballData = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
      },
      params: params,
    });

    const data = response.data;
    console.log(data);
    return data; 
  } catch (error) {
    console.error('Error fetching basketball data:', error);
    throw error;
  }
};



export const fetchBasketballStandings = async (league, season) => {
  try {
    const response = await axios.get(`${BASE_URL}/standings`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
      },
      params: {
        league: league,
        season: season,
      },
    });

    const data = response.data;
    console.log(data.response);
    return data;
  } catch (error) {
    console.error('Error fetching basketball standings:', error);
    throw error;
  }
};

export const fetchBasketballTeams = async (searchTerm) => {
  try {
    if (!API_KEY) {
      throw new Error("API key is missing.");
    }

    const response = await axios.get(`${BASE_URL}/teams`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
      },
      params: {
        search: searchTerm,
      },
    });

    const data = response.data;
    console.log(data.response);
    return data; 
  } catch (error) {
    console.error('Error fetching basketball teams:', error);
    throw error; 
  }
};

export const fetchBasketballGames = async (date) => {
  try {
    const response = await axios.get(`${BASE_URL}/games`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
      },
      params: {
        date: date,
      },
    });

    const data = response.data;
    console.log(data.response);
    return data;
  } catch (error) {
    console.error('Error fetching basketball games:', error);
    throw error;
  }
};
