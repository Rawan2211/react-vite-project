import axios from 'axios';

export interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const apiUrl = '/api/auth/login'; 
  const response = await axios.post(apiUrl, credentials);
  return response.data.token;
};
