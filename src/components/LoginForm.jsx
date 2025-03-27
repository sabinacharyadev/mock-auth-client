import { Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { getUser, loginUser } from "../axios/UserAxios";
const LoginForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  const getUserInfo = async (token) => {
    const response = await getUser(token);
    console.log(response);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);

    getUserInfo(response.data);
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
