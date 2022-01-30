import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { useWhoami } from "../services/User";

const withAuth = (Component, roles) => {
  const Auth = (props) => {
    const { data: user, isLoading } = useWhoami();
    const router = useRouter();
    if (isLoading) return <Loading />;

    if ((!user || user?.error) && router?.pathname != "/login") {
      if (typeof window !== "undefined") {
        router.push("/login");
      }
      return <Loading />;
    } else if (user && !user?.error && router?.pathname == "/login") {
      if (typeof window !== "undefined") {
        router.push("/");
      }
      return <Loading />;
    }

    return <Component {...props} user={user} roles={user?.roles} />;
  };

  return Auth;
};

export default withAuth;
