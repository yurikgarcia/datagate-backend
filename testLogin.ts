import axios from 'axios';

(async () => {
  try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: 'yurik@gmail.com',
        password: 'password',
      });

      console.log('Login successful:', response.data);
  } catch (error: any) {
      console.error('Error logging in:', 
        {
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });

  }
})();

