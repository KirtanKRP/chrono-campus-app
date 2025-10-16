import { api } from '@/lib/axios';

export const eventService = {
  getAll: async () => {
    // TODO: Backend integration
    // const { data } = await api.get('/events');
    // return data;
    console.log('Fetching all events');
    return [];
  },

  create: async (eventData: any) => {
    // TODO: Backend integration
    // const { data } = await api.post('/events', eventData);
    // return data;
    console.log('Creating event:', eventData);
  },

  update: async (id: string, eventData: any) => {
    // TODO: Backend integration
    // const { data } = await api.put(`/events/${id}`, eventData);
    // return data;
    console.log('Updating event:', id, eventData);
  },

  delete: async (id: string) => {
    // TODO: Backend integration
    // await api.delete(`/events/${id}`);
    console.log('Deleting event:', id);
  },
};
