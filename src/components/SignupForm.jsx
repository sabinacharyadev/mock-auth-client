import { Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
const SignupForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { name, email, password } = formData;

  const handleOnSubmit = () => {};

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label>Name</Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
            name="name"
            value={name}
          />
        </Col>
      </Form.Group>

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
      <Button type="submit">Signup</Button>
    </Form>
  );
};

export default SignupForm;
