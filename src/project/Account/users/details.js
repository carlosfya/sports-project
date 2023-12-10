import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as followsClient from "../../follows/client";
import { useSelector } from "react-redux";
import "./details.css"
import * as client from "./client";
import { useNavigate } from "react-router";
import * as postsClient from "../../likes/client";

function ModalFollowers({ followers, onClose }) {
  return (
    <div className="mmodal">
      <div className="mmodal-content"> 
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Followers:</h2>
        <div className="list-group">
          {followers.length > 0 ? (
            <ul>
              {followers.map((followerData, index) => (
                <li key={index} className="list-group">
                  <Link to={`/project/users/${followerData?.follower?._id}`} className="list-group-item">
                    {followerData?.follower?.username}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No followers yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function ModalFollowing({followers, onClose }) {
  return (
    <div className="mmodal">
      <div className="mmodal-content"> 
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Following</h2>
        <div className="list-group">
          {followers.length > 0 ? (
            <ul>
              {followers.map((followerData, index) => (
                <li key={index} className="list-group">
                  <Link to={`/project/users/${followerData?.followed?._id}`} className="list-group-item">
                    {followerData?.followed?.username}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No following yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}


function UserDetail() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  const fetchLikedPosts = async () => {
    try {
      const likedPostsData = await postsClient.findPostsLikedByUser(id);
      setLikedPosts(likedPostsData);
    } catch (error) {
      console.error('Error fetching liked posts:', error);
    }
  };

  const handleReturn = () => {
    navigate(-1); // Go back one step in the history
  };


  const fetchUser = async () => {
    const userData = await client.findUserById(id);
    setUser(userData);
  };

  const followUser = async () => {
    const follow = await followsClient.currenUserFollowsUser(id);
    console.log(follow);
  };

  const findFollowers = async () => {
    const followersData = await followsClient.findUsersFollowingUser(id);
    setFollowers(followersData);
    const isFollowingUser = followersData.some(data => data.follower?._id === currentUser._id);
    setIsFollowing(isFollowingUser);
  };

  const findFollowing = async () => {
    const followingData = await followsClient.findUsersFollowedByUser(id);
    setFollowing(followingData);
  };

  const deleteUserFollowsUser = async () => {
    const unfollow = await followsClient.deleteUserFollowsUser(
      currentUser._id,
      id
    );
    console.log(unfollow);
  };

  const toggleFollow = async () => {
    try {
      if (isFollowing) {
        await deleteUserFollowsUser();
      } else {
        await followUser();
      }
  
      // Fetch updated followers after follow/unfollow action
      const updatedFollowersData = await followsClient.findUsersFollowingUser(id);
      setFollowers(updatedFollowersData);
  
      // Assuming updatedFollowersData is an array
      const isFollowingUser = updatedFollowersData.some(data => data.follower?._id === currentUser._id);
      
      // Now isFollowingUser will be true if the currentUser is following in any entry of updatedFollowersData
      setIsFollowing(isFollowingUser);
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  };
  

  const openFollowersModal = () => {
    findFollowers();
    setShowFollowersModal(true);
  };

  const closeFollowersModal = () => {
    setShowFollowersModal(false);
  };
  const openFollowingModal = () => {
    findFollowing();
    setShowFollowingModal(true);
  };

  const closeFollowingModal = () => {
    setShowFollowingModal(false);
  };

  useEffect(() => {
    fetchUser();
    fetchLikedPosts(); 
    findFollowers();
    findFollowing();
  }, [id]);

  return (
    <div>

     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <button className="btn btn-danger" onClick={toggleFollow}>
    {isFollowing ? "Unfollow" : "Follow"}
  </button>
  <h1 style={{ marginLeft: "auto" }}>User Details</h1>
  <div style={{ marginLeft: "auto", textAlign: "center" }}>
    <button className="btn btn-primary" onClick={openFollowersModal}>Followers{followers.length}</button>
    <button className="btn btn-secondary" onClick={openFollowingModal}>Following{following.length}</button>
  </div>
</div>



      <hr />

      <div>
        <table className="table" >
          <thead>
          <tr>
            <th style={{ textAlign: "center", fontSize: "30px"  }}>
              <p>Username:</p>
            </th>
            <th style={{ textAlign: "center", fontSize: "30px"  }}>
              <p>FirstName:</p>
            </th>
          </tr>
          <tr>
            <td style={{ textAlign: "center", fontSize: "30px"  }}>
              <p>{user.username}</p>
            </td>
            <td style={{ textAlign: "center" , fontSize: "30px" }}>
                <p>{user.firstName}</p> 
            </td>
          </tr>
          </thead>
        </table>
    </div>




      {/*<pre>{JSON.stringify(user, null, 2)}</pre>*/}
   
      {showFollowersModal && (
        <ModalFollowers followers={followers} onClose={closeFollowersModal} />
      )}
      {showFollowingModal && (
        <ModalFollowing followers={following} onClose={closeFollowingModal} />
      )}
       <h2>Liked Posts</h2>
      {likedPosts.length > 0 ? (
        <ul>
          {likedPosts.map((post, index) => (
            <li key={index} className="list-group">
              {/* Display information about the liked post */}
              <Link to={`/project/Sports/formula1/drivers/${post.title}`} className="list-group-item">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No liked posts yet.</p>
      )}
       <button
        type="button"
        className="btn btn-primary"
        onClick={handleReturn}
      >
        Return
      </button>
    </div>
  );
}

export default UserDetail;
