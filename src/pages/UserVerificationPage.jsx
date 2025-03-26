import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router";
import { verifyUser } from "../axios/UserAxios";

const UserVerificationPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();

  const email = params.get("email");
  const token = params.get("token");

  const verifyUserEmail = async () => {
    const response = await verifyUser({ email, token });
    if (response) {
      console.log(response);
      setIsLoading(false);
      navigate("/");
    }
  };

  useEffect(() => {
    verifyUserEmail();
  }, []);
  return (
    <>
      {isLoading && (
        <span>
          Verifying <Spinner></Spinner>
        </span>
      )}
    </>
  );
};

export default UserVerificationPage;
