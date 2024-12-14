import {useAuth} from "@firefuse/react";
import {Outlet} from "react-router";
import {useEffect} from "react";

export const ProtectedRoutes = () => {
  const { isAuthenticated, getAuthUrl } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = getAuthUrl({ redirectUrl: window.location.href });
    }
  }, [isAuthenticated, getAuthUrl]);

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet/>;
}
