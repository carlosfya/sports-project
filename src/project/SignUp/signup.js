import React, { useState } from "react";
import * as client from "../Account/users/client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../Account/users/reducer";
import { useDispatch } from "react-redux";

function SignUp() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const currentUser = await client.signUp(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/project/account");
      console.log(currentUser);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <div className="alert alert-danger">{error.message}</div>}
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                </div>
                <button type="button" onClick={signUp} className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/project/signin">Already have an account? Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;