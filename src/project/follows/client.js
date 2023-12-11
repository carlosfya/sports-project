import axios from "axios";

const KEY = process.env.REACT_APP_API_BASE;


const request = axios.create({
  withCredentials: true,
});

export const currenUserFollowsUser = async (followId) => {
  const response = await request.post(
    `${KEY}/users/follows/${followId}`
  );
  return response.data;
};
export const createUserFollowsUser = async (userId, followId) => {
  const response = await request.post(
    `${KEY}/users/${userId}/follows/${followId}`
  );
  return response.data;
};
export const deleteUserFollowsUser = async (userId, followId) => {
  const response = await request.delete(
    `${KEY}/users/${userId}/follows/${followId}`
  );
  return response.data;
};
export const findUsersFollowingUser = async (userId) => {
  const response = await request.get(
    `${KEY}/users/${userId}/followers`
  );
  return response.data;
};
export const findUsersFollowedByUser = async (userId) => {
  const response = await request.get(
    `${KEY}/users/${userId}/following`
  );
  return response.data;
};