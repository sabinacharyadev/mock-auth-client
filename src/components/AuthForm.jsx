import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <Container fluid className="p-4 border shadow">
      {isLoginForm && <LoginForm />}
      {!isLoginForm && <SignupForm />}
      {isLoginForm && (
        <p>
          Not a member with us?{" "}
          <Button
            variant="link"
            className="p-0"
            onClick={() => {
              setIsLoginForm(false);
            }}
          >
            Signup
          </Button>
        </p>
      )}
      {!isLoginForm && (
        <p>
          Already a member with us?{" "}
          <Button
            variant="link"
            className="p-0"
            onClick={() => {
              setIsLoginForm(true);
            }}
          >
            Login
          </Button>
        </p>
      )}
    </Container>
  );
};

export default AuthForm;
