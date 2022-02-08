import { useRouter } from "next/router";
import Loading from "../components/Loading";
import { useWhoami } from "../services/User";
const withAuthCheck = (Component, roles) => {
  const Auth = (props) => {
    const { data: user, isLoading } = useWhoami();
    const router = useRouter();
    let verificado = false;

    // If user is not logged in, return login component
    if (
      user &&
      !user?.error &&
      user?.user?.estado == 2 &&
      router?.pathname != "/verificar"
    ) {
      if (typeof window !== "undefined") {
        router.push("/verificar");
      }
      return <Loading />;
    } else if (
      user &&
      !user?.error &&
      user?.user?.estado != 2 &&
      router?.pathname == "/verificar"
    ) {
      if (typeof window !== "undefined") {
        router.push("/");
      }
      return <Loading />;
    }

    // If user is logged in, return original component
    return <Component {...props} user={user} />;
  };

  //Copy getInitial props so it will run as well
  // if (Component.getInitialProps) {
  //   Auth.getInitialProps = Component?.getInitialProps;
  // }

  return Auth;
};

export default withAuthCheck;
