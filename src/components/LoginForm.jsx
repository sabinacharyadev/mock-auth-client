import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { loginUser } from "../axios/UserAxios";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginAction, getUserAction } from "../redux/userAction";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useLoader } from "../hooks/useLoader";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const { isLoading, startLoading, stopLoading } = useLoader(false);
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  useEffect(() => {
    !user._id ? dispatch(autoLoginAction()) : navigate("/dashboard");
  }, [dispatch, navigate, user._id]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    const response = await loginUser(formData);
    dispatch(getUserAction(response.data.accessToken));
    stopLoading();

    sessionStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={handleOnChange}
            name="email"
            value={email}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Password</Form.Label>
        <Col>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
            value={password}
          />
        </Col>
      </Form.Group>
      {isLoading && (
        <Button type="submit" disabled>
          Login <Spinner></Spinner>
        </Button>
      )}
      {!isLoading && <Button type="submit">Login </Button>}
    </Form>
  );
};

export default LoginForm;
