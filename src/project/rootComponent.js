import React, { useState, useEffect } from "react";
import * as client from "./Account/users/client";
import { setCurrentUser } from "./Account/users/reducer";
import { useDispatch } from "react-redux";

function RootComponent({ show, children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const fetchCurrentUser = async () => {
    try {
      const currentUser = await client.account();
      dispatch(setCurrentUser(currentUser));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching current user:", error);
      // You can add additional handling here if needed
      setLoading(false); // Make sure to set loading to false even in case of an error
    }
  };
  
  useEffect(() => {
    fetchCurrentUser();
  }, []);
  console.log(loading)
  return <div>{!loading && children}</div>;
}

export default RootComponent;