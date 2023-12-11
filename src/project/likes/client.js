import axios from "axios";

const KEY = process.env.REACT_APP_API_BASE;

const request = axios.create({
  withCredentials: true,
});

export const createUserLikesPost = async (postId, title) => {
  const response = await request.post(
    `${KEY}/users/likes/${postId}/title/${title}`
  );
  return response.data;
};

export const deleteUserLikesPost = async (userId,postId) => {
  const response = await request.delete(
    `${KEY}/users/${userId}/likes/${postId}`
  );
  return response.data;
};

export const findUsersLikedPost = async (userId) => {
  const response = await request.get(
    `${KEY}/users/${userId}/likes`
  );
  return response.data;
};

export const findPostsLikedByUser = async (userId) => {
  const response = await request.get(
    `${KEY}/users/${userId}/likes`
  );
  return response.data;
};