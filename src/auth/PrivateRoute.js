import { ToastMessage } from "components/ToastMessage";
import { Navigate } from "react-router-dom";
import LocalServices from "services/LocalServices";


 const PrivateRoute = ({ children }) => {
  const token = LocalServices.getServices("token")
  if (!token) {

    // user is not authenticated
    return <Navigate to="/tv" replace/>;
    
  }
  return children;
};

export default PrivateRoute
