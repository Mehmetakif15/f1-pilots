import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../assets/F1_logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="f1_logo" width="300px" />
      <h1 className="header-title my-4 font-monospace display-4 fw-bold">
        Formula 1 Champions
      </h1>
    </Container>
  );
};

export default Header;
