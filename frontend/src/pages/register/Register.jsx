import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import RegisterForm from "../../components/shared/RegisterForm/RegisterForm";

const Register = () => {
  const { token } = useAuth();

  // Si la persona está logeada la redirigimos a la página principal.
  if (token) return <Navigate to="/login" />;
  // *****Acordarse de que esto tiene que ir al dashboard con el token*****

  return (
    <main className="register">
      <RegisterForm />
    </main>
  );
};

export default Register;
