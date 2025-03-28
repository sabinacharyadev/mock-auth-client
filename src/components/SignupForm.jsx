import { Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { createUser } from "../axios/UserAxios";
const SignupForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { name, email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await createUser(formData);
    console.log(response);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
        <Form.Label>Name</Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
            name="name"
            value={name}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label>Email</Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Email"
            onChange={handleOnChange}
            name="email"
            value={email}
            required
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
            required
          />
        </Col>
      </Form.Group>
      <Button type="submit">Signup</Button>
    </Form>
  );
};

export default SignupForm;
