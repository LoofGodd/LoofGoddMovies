import { useNavigate } from "react-router-dom";
import logo from "../data/logo.png";

function Logo() {
  const navigate = useNavigate();
  return (
    <img
      src={logo}
      alt="logo"
      className="h-full w-full cursor-pointer object-cover"
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
