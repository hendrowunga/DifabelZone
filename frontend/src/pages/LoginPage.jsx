import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import FormLogin from "../components/FormLogin";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Container className="mt-5">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="logo-text">DIFABEL ZONE</div>
        <div class="subtitle-text">Step into Style and Comfort</div>

        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 sign-in-text">Sign in to your account</h2>
      </div>
      <FormLogin />
    </Container>
  );
};

export default LoginPage;
