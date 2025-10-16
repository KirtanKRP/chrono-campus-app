import { api } from '@/lib/axios';

export const authService = {
  login: async (email: string, password: string) => {
    // TODO: Backend integration
    // const { data } = await api.post('/auth/login', { email, password });
    // return data;
    console.log('Login:', { email, password });
  },

  signup: async (full_name: string, email: string, password: string, role: string) => {
    // TODO: Backend integration
    // const { data } = await api.post('/auth/signup', { full_name, email, password, role });
    // return data;
    console.log('Signup:', { full_name, email, password, role });
  },

  logout: async () => {
    // TODO: Backend integration
    // await api.post('/auth/logout');
    console.log('Logout');
  },
};
