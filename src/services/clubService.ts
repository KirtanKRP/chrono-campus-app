import { api } from '@/lib/axios';

export const clubService = {
  getAll: async () => {
    // TODO: Backend integration
    // const { data } = await api.get('/clubs');
    // return data;
    console.log('Fetching all clubs');
    return [];
  },

  create: async (clubData: any) => {
    // TODO: Backend integration
    // const { data } = await api.post('/clubs', clubData);
    // return data;
    console.log('Creating club:', clubData);
  },

  update: async (id: string, clubData: any) => {
    // TODO: Backend integration
    // const { data } = await api.put(`/clubs/${id}`, clubData);
    // return data;
    console.log('Updating club:', id, clubData);
  },

  delete: async (id: string) => {
    // TODO: Backend integration
    // await api.delete(`/clubs/${id}`);
    console.log('Deleting club:', id);
  },
};
