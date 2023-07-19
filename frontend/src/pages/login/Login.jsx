import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginForm from "../../components/shared/LoginForm/LoginForm";

const Login = () => {
  const { token, login } = useAuth();

  // Si la persona está logeada la redirigimos a la página principal.
  if (token) return <Navigate to="/" />;
  /******** También tendrá que ir al dashboard con token *********/
  return (
    <main className="login">
      <LoginForm login={login} />
    </main>
  );
};

export default Login;
