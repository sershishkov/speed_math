import axios from 'axios';

const API_URL = '/api/auth';

// Register user
const register = async (userData) => {
  const responseToken = await axios.post(`${API_URL}/register`, userData);
  const token = responseToken.data.token;

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const responseUser = await axios.get(`${API_URL}/me`, config);

  const user = responseUser.data;
  console.log(user);
  console.log(token);
  return user ? user : null;
};

const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
