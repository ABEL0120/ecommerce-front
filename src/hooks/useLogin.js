import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import auth from "../apis/auth/auth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loginAction = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await auth.loginUser(email, password);
      if (res.data.success) {
        loginAction(res.data.data.user);
        navigate("/verify-code");
        return true;
      } else {
        setError(res.data.message);
        return false;
      }
    } catch (error) {
      setError(
        error.response.data.message ||
          "Error al iniciar sesión. Intente nuevamente."
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
