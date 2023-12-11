import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const API_URL = process.env.REACT_APP_BASE_API_BASE;
const USERT_API = `${API_URL}/users`;

export const signIn = async (credentials) => {
  const response = await request.post(`${USERT_API}/signin`, credentials);
  return response.data;
};
export const signUp = async (credentials) => {
  const response = await request.post(`${USERT_API}/signup`, credentials);
  return response.data;
};
export const signOut = async () => {
  const response = await request.post(`${USERT_API}/signout`);
  return response.data;
};
export const account = async () => {
  const response = await request.post(`${USERT_API}/account`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERT_API}`);
  return response.data;
};

export const findUserById = async (userId) => {
  const response = await request.get(`${USERT_API}/${userId}`);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await request.put(`${USERT_API}/${user._id}`, user);
  return response.data;
};

export const createUser = async (user) => {
  console.log("klk creating user")
  const response = await request.post(`${USERT_API}`, user);
  return response.data;
};

export const deleteUser = async (user) => {
  const response = await request.delete(
    `${USERT_API}/${user._id}`);
  return response.data;
};

