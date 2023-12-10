import React, { useState, useEffect } from 'react';
import * as client from "../../likes/client";

function LikedByButton({ postId }) {
  const [likedByUsers, setLikedByUsers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLikedByClick = async () => {
    try {
      const usersLikedPost = await client.findUsersLikedPost(postId);
      setLikedByUsers(usersLikedPost);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching users who liked the post:', error);
    }
  };

  useEffect(() => {
    // Fetch liked users when the postId changes
    const fetchLikedUsers = async () => {
      try {
        const usersLikedPost = await client.findUsersLikedPost(postId);
        setLikedByUsers(usersLikedPost);
      } catch (error) {
        console.error('Error fetching users who liked the post:', error);
      }
    };

    // Fetch liked users when the component mounts
    fetchLikedUsers();
  }, [postId]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleLikedByClick}>Liked By</button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Users who Liked the Post</h2>
            <ul>
              {likedByUsers.map((user) => (
                <li key={user.userId}>{user.username}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default LikedByButton;
