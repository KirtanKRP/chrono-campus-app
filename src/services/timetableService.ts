import { api } from '@/lib/axios';

export const timetableService = {
  getMyTimetable: async () => {
    // TODO: Backend integration
    // const { data } = await api.get('/timetable/my');
    // return data;
    console.log('Fetching my timetable');
    return {};
  },

  generateDraft: async () => {
    // TODO: Backend integration
    // const { data } = await api.post('/timetable/generate');
    // return data;
    console.log('Generating draft timetable');
  },

  publish: async () => {
    // TODO: Backend integration
    // const { data } = await api.post('/timetable/publish');
    // return data;
    console.log('Publishing timetable');
  },
};
