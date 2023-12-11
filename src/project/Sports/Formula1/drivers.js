import React, { useState, useEffect } from 'react';
import { fetchDrivers } from '../../SportsService';
import { DRIVER_IMG } from '../../SportsService';
import NavBar from './sideBarNav';
import * as client from '../../likes/client';
import { useSelector } from 'react-redux';
import { useParams, Link,useNavigate  } from 'react-router-dom';
import './driver.css';
import TopBarNav from './topbar';

function Formula1() {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [driverData, setDriverData] = useState(null);
  const [error, setError] = useState(null);
  const [likedDrivers, setLikedDrivers] = useState([]);
  const { driverTitle } = useParams();

  const likeOrDislikePost = async (driverId, driverName) => {
    try {
      if (!currentUser) {
        // If the user is not logged in, navigate to the sign-in screen
        navigate('/project/signin'); // Replace '/path-to-sign-in' with your actual sign-in path
        return;
      }

      if (likedDrivers.includes(String(driverId))) {
        await disLikePost(driverId);
      } else {
        await likePost(driverId, driverName);
      }
    } catch (error) {
      console.error('Error liking/disliking post:', error);
    }
  };

  const likePost = async (driverId, driverName) => {
    // Make the API call to like the post
    const response = await client.createUserLikesPost(driverId, driverName);
    console.log(response);

    // Update the liked status in the local state
    setLikedDrivers((prevLikedDrivers) => [...prevLikedDrivers, String(driverId)]);
  };

  const disLikePost = async (driverId) => {
    try {
      // Make the API call to dislike the post
      const response = await client.deleteUserLikesPost(currentUser._id, driverId);
      console.log('Dislike response:', response);
      setLikedDrivers((prevLikedDrivers) =>
        prevLikedDrivers.filter((id) => id !== String(driverId))
      );
    } catch (error) {
      // Log the entire error object
      console.error('Error disliking post:', error);
    }
  };

  const handleSearch = async () => {
    try {
      // Use driverTitle in your search
      const data = await fetchDrivers(searchTerm);
      setDriverData(data.response);
      setError(null);
  
      
     
    } catch (error) {
      setDriverData(null);
      setError('Error fetching driver data');
    }
  };
  
  

  useEffect(() => {
    const loadLikedDrivers = async () => {
      try {
        const likedPosts = await client.findUsersLikedPost(currentUser._id);
        const newLikedDrivers = likedPosts.map((post) => String(post.postId));
        console.log('Liked Drivers:', newLikedDrivers);
        setLikedDrivers(newLikedDrivers);
      } catch (error) {
        console.error('Error loading liked drivers:', error);
      }
    };
    const fetchData = async () => {
      try {
        // Use driverTitle in the initial fetch
        const data = await fetchDrivers(driverTitle || '');
        setDriverData(data.response);
        setError(null);
      } catch (error) {
        setDriverData(null);
        setError('Error fetching driver data');
      }
    };

    loadLikedDrivers();
    fetchData();}, [currentUser?._id, driverTitle]);

  useEffect(() => {
    // Retrieve the search term from URL parameters on component mount
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlSearchTerm = urlSearchParams.get('searchTerm');
    setSearchTerm(urlSearchTerm || '');
  }, []);
  useEffect(() => {
    if (driverData) {
      // Use the navigate function to update the URL for each driver
      driverData.forEach((driver) => {
        navigate(`/project/Sports/formula1/drivers/${driver.name}`);
      });
    }
  }, [driverData, navigate]);

  return (
    <div className="flex-container">
    {/* Conditionally render either the sidebar or the top bar */}
    <div className="d-none d-md-block">
        <NavBar />
      </div>

      {/* Top bar component visible on small screens */}
      <div className="d-block d-md-none wd-full wd-bg-color-grey wd-flex-row-container wd-home">
        <TopBarNav />
      </div>

      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Drivers</h1>
        <hr />
        <input
          className='form-control'
          type="text"
          placeholder="Search for drivers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='btn btn-secondary' onClick={handleSearch}>
          Search
        </button>

        {error && <p>{error}</p>}
        
  
        {driverData && (
          <div>
            {driverData.map((driver) => (
              <div
                key={driver.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh', // Set the height of the container to 100% of the viewport height
                }}
              >
                <p>Name: {driver.name}</p>
                <img src={DRIVER_IMG(driver.id)} alt={`Image of ${driver.name}`} />
                {/* Display like button and handle like click */}
                {console.log(likedDrivers)}
                {console.log(driver.id)}
                <button
                  className='btn btn-primary'
                  onClick={() => likeOrDislikePost(driver.id, driver.name)}
                >
                  {likedDrivers.includes(String(driver.id)) ? 'Liked' : 'Like'}
                </button>
                {/* Display the LikedByButton component passing the postId (driver.id) */}
                <Link
                  to={`/project/Sports/formula1/drivers/info/${driver.name}`}
                  className="user-link"
                >
                  Driver Info
                </Link>
                {/* Add more information as needed */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Formula1;
