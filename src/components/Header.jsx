import { Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/userAction";
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
          <Navbar.Text className="mx-2">Signed in as:{user.name}</Navbar.Text>
          <Navbar.Text style={{ cursor: "pointer" }} onClick={handleOnClick}>
            Logout
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
