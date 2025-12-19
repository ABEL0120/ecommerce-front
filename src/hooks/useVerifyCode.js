import { useState, useEffect } from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import auth from "../apis/auth/auth";

const useVerifyCode = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const setSession = useAuthStore((state) => state.setSession);
  const tempUser = useAuthStore((state) => state.tempUser);
  const needsVerification = useAuthStore((state) => state.needsVerification);
  const navigate = useNavigate();

  useEffect(() => {
    if (!needsVerification || !tempUser) {
      navigate("/login");
    }
  }, [needsVerification, tempUser, navigate]);

  const verifyCode = async (code) => {
    setLoading(true);
    setError(null);
    try {
      if (!tempUser?.id) {
        navigate("/login");
        return false;
      }
      const res = await auth.verifyUser(tempUser.id, code);
      if (res.data.success) {
        const { user, token } = res.data.data;
        setSession(user, token);
        navigate("/dashboard");
        return true;
      } else {
        setError(res.data.message);
        return false;
      }
    } catch (err) {
      setError(
        err.response.data.message ||
          "Error al verificar enviando el código. Inténtalo de nuevo."
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    verifyCode,
  };
};

export default useVerifyCode;
