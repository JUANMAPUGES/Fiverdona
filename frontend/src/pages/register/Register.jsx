import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import RegisterForm from "../../components/shared/RegisterForm/RegisterForm";

const Register = () => {
  const { token, authRegister } = useAuth();

  // Si la persona está logueada la redirigimos a la página del login.
  if (token) return <Navigate to="/login" />;

  return (
    <main className="register">
      <RegisterForm authRegister={authRegister} />
    </main>
  );
};

export default Register;
