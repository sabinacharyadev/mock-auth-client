import { Form, Row, Col, Button } from "react-bootstrap";
import useForm from "../hooks/useForm";
import { createUser } from "../axios/UserAxios";
import { useLoader } from "../hooks/useLoader";
const SignupForm = () => {
  const { isLoading, startLoading, stopLoading } = useLoader(false);

  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const { formData, handleOnChange } = useForm(initialFormData);
  const { name, email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    startLoading();
    const response = await createUser(formData);
    console.log(response);
    stopLoading();
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
      {isLoading && (
        <Button type="submit" disabled>
          Signup <Spinner></Spinner>
        </Button>
      )}
      {!isLoading && <Button type="submit">Signup </Button>}
    </Form>
  );
};

export default SignupForm;
