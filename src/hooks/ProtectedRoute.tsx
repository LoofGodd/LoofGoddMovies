import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../store";

interface Props {
  children: ReactNode;
}
function ProtectedRoute({ children }: Props) {
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(user, "user");
  useEffect(() => {
    if (user === "") navigate("/login");
    else navigate("/");
    console.log("user");
  }, [navigate, user]);
  return children;
}

export default ProtectedRoute;
