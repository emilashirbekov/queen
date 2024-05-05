import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  useEffect(() => {
    const isStaff = JSON.parse(
      localStorage.getItem("persist:store:users") as string,
    ).user;

    if (JSON.parse(isStaff).is_staff) {
      setTimeout(() => {
        navigate(currentLocation.pathname);
      }, 700);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 700);
    }
  }, []);

  return children;
};

export default ProtectedRoutes;
