import ReactDOM from "react-dom";

const UpperRoot = ({
  children,
  root = document.getElementById("modal-root"),
}) => {
  return ReactDOM.createPortal(children, root);
};

export default UpperRoot;
