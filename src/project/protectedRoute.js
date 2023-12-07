import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { currentUser, loading } = useSelector((state) => state.user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/project/signin" />;
}


export default ProtectedRoute;