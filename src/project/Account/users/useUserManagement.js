import { useState, useEffect } from "react";
import * as client from "./client";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/userSlice';

export function useUserManagement() {
  const [users, setUsers] = useState([]);
  const currentUser = useSelector(selectCurrentUser);
  const [user, setUser] = useState({
    username: currentUser ? currentUser.username : '',
    password: '',
    firstName: currentUser ? currentUser.firstName : '',
    lastName: currentUser ? currentUser.lastName : '',
    role: currentUser ? currentUser.role : 'USER',
  });

  console.log(currentUser)
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUser({ username: "", password: "", firstName: "", lastName: "", role: "USER" });
      setUsers([newUser, ...users]);
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  const deleteUser = async (userToDelete) => {
    try {
      await client.deleteUser(userToDelete);
      setUsers(users.filter((u) => u._id !== userToDelete._id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const fetchedUsers = await client.findAllUsers();
    setUsers(fetchedUsers);
  };

  const updateUser = async () => {
    try {
      // Check if user has values, if not, use currentUser
      const userToUpdate = {
        username: user.username || currentUser.username,
        password: user.password || currentUser.password,
        firstName: user.firstName || currentUser.firstName,
        lastName: user.lastName || currentUser.lastName,
        role: user.role || currentUser.role,
      };
      console.log("usuario que updates:",userToUpdate)

      await client.updateUser(userToUpdate);
      setUsers(users.map((u) => (u._id === userToUpdate._id ? userToUpdate : u)));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    user,
    createUser,
    deleteUser,
    updateUser,
    setUser,
    fetchUsers
  };
}
