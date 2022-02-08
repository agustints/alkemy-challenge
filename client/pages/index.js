import NavbarLanding from "../components/Navbar/Landing";
import { Container, Content } from "../components/Containers";
import Form from "../components/Form";
import { useBalance } from "../services/getBalance";
import Table from "../components/Table";
import { CustomBtn } from "../components/Containers/styles";
import withAuth from "../services/withAuth";
function index() {
  const { data: balance } = useBalance();

  return (
    <Container>
      <NavbarLanding />
      <Content>
        <Table />
        <h1 className="my__balance">
          Mi Dinero{" "}
          {balance?.rows?.length > 0 ? balance?.rows[0]?.balanace ? balance?.rows[0]?.balanace : "00.00" : "00.00"}
        </h1>
      </Content>
    </Container>
  );
}
export default withAuth(index);
