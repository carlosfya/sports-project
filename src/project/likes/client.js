import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

export const createUserLikesPost = async (postId, title) => {
  const response = await request.post(
    `http://localhost:4000/api/users/likes/${postId}/title/${title}`
  );
  return response.data;
};

export const deleteUserLikesPost = async (userId,postId) => {
  const response = await request.delete(
    `http://localhost:4000/api/users/${userId}/likes/${postId}`
  );
  return response.data;
};

export const findUsersLikedPost = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/likes`
  );
  return response.data;
};

export const findPostsLikedByUser = async (userId) => {
  const response = await request.get(
    `http://localhost:4000/api/users/${userId}/likes`
  );
  return response.data;
};