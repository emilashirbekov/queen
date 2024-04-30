import { isAdmin } from "@/shared/config/localstorage";
import { FC, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const navigate = useNavigate();
  const isStaff = isAdmin;
  const currentLocation = useLocation();

  useEffect(() => {
    if (isStaff !== false) {
      setTimeout(() => {
        navigate(currentLocation.pathname);
      }, 700);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 700);
    }
  }, [isAdmin]);

  return children;
};

export default ProtectedRoutes;
