import axios from "axios";

const loginUser = async (email, password) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/api/auth/login`,
    {
      email,
      password,
    }
  );
  return res;
};

const registerUser = async (email, name, password) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/api/auth/register`,
    {
      email,
      name,
      password,
    }
  );
  return res;
};

const verifyUser = async (userId, code) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/api/auth/verify`,
    {
      code,
      userId,
    }
  );
  return res;
};

const logoutUser = async (token) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/api/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export default {
  loginUser,
  registerUser,
  verifyUser,
  logoutUser,
};
