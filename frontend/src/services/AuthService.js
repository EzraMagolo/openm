import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend API URL
});

const AuthService = {
  register: async (email, password) => {
    try {
      const response = await axiosInstance.post('/register', { email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      throw new Error(error.response.data.error || 'Registration failed');
    }
  },

  login: async (email, password) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      return token;
    } catch (error) {
      throw new Error(error.response.data.error || 'Login failed');
    }
  },

  logout: () => {
    localStorage.removeItem('authToken');
  },
};

export default AuthService;





