import { Navbar, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/userAction";
import { uppercaseFirstLetter } from "../utility/stringHelper";
const Header = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    sessionStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    dispatch(getUserAction(sessionStorage.getItem("accessToken")));
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Auth System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown
            title={uppercaseFirstLetter(user.name)}
            id="basic-nav-dropdown"
          >
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item onClick={handleOnClick}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
