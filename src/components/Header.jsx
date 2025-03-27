import { Navbar, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.users);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Auth System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="mx-2">Signed in as:{user.name}</Navbar.Text>
          <Navbar.Text>
            <a href="#login">Logout</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
