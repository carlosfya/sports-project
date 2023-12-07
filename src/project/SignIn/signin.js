import React, { useState } from "react";
import * as client from "../Account/users/client";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../Account/users/reducer";
import { useDispatch } from "react-redux";

function SignIn() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const currentUser = await client.signIn(user);
      dispatch(setCurrentUser(currentUser));
      navigate("/project/account");
      console.log(currentUser)
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
              <h2 className="text-center mb-4">Sign In</h2>
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
                <button type="button" onClick={signIn} className="btn btn-primary w-100">
                  Sign In
                </button>
              </form>
              <div className="mt-3 text-center">
                <Link to="/project/signup">Don't have an account? Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;