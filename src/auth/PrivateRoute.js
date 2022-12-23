import { ToastMessage } from "components/ToastMessage";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { toggleModalVisibility } from "redux/reducers/connectWalletModal_State";
import LocalServices from "services/LocalServices";


 const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const token = LocalServices.getServices("token")
  if (!token) {
    dispatch(toggleModalVisibility(true));  
    return <Navigate to="/tv" replace/>;;
  }
  return children;
};

export default PrivateRoute
