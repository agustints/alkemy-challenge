import { Container } from "../components/Containers";
import Login from "../components/Login";
import withAuth from "../services/withAuth";
function login() {
  return (
    <>
      <Container>
        <Login />
      </Container>
    </>
  );
}
export default withAuth(login);
