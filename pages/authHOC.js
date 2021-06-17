import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { useUser } from "@/swr/user";
import { getAuthToken } from "@/services/authService";

const ProtectedPage = (WrappedComponent) => {
  return (props) => {
    // only render this component client-side
    if (process.browser) {
      const Router = useRouter();

      const loginRedirect = () => {
        Router.replace("/login");
        return null;
      };

      const token = getAuthToken();

      if (!token) {
        return loginRedirect();
      }

      try {
        var decoded = jwtDecode(token);
      } catch (error) {
        return loginRedirect();
      }

      if (!decoded) {
        return loginRedirect();
      }

      const { user } = useUser(token);
      const passedProps = { ...props, ...user };

      return <WrappedComponent {...passedProps} />;
    }

    // don't server-render this component
    return null;
  };
};

export default ProtectedPage;
