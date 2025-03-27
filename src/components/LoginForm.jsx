import { Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { loginUser } from "../axios/UserAxios";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/userAction";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  useEffect(() => {
    !user._id
      ? dispatch(getUserAction(sessionStorage.getItem("accessToken")))
      : navigate("/dashboard");
  }, [dispatch, navigate, user._id]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    dispatch(getUserAction(response.data.accessToken));

    sessionStorage.setItem("accessToken", response.data.accessToken);

    navigate("/dashboard");
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Col sm="10">
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
        <Form.Label column>Password</Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
            value={password}
          />
        </Col>
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
