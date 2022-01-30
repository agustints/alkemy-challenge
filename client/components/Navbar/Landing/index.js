import Navbar from "..";
import { FaHome, FaMoneyBillWave, FaSlackHash } from "react-icons/fa";

function NavbarLanding() {
  return (
    <Navbar
      items={[
        {
          nombre: "Inicio",
          link: "/",
          icono: <FaHome />,
        },
      ]}
    />
  );
}
export default NavbarLanding;
