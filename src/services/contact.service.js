import { HttpResponseEnum } from '../utils/enums';
import AppService from './appService';

const URL = '/contacts';

const ContactService = {
  sendContact: async (contactData) => {
    try {
      const { status, data } = await AppService.post(`${URL}`, {
        data: contactData,
      });
      if (status != HttpResponseEnum.OK || !data) {
        throw new Error('No se pudo guardar la reserva');
      }
      return data;
    } catch (error) {
      console.log('Error fetching contact: ', error);
      throw error;
    }
  },
};
export default ContactService;
