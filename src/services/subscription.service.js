import { HttpResponseEnum } from '../utils/enums';
import AppService from './appService';


const URL = '/subscriptions';

const SubscriptionService = {
  sendSubscription: async (subscriptionData) => {
    try {
      const { status, data } = await AppService.post(`${URL}`, { data: subscriptionData });
      if (status != HttpResponseEnum.OK || !data) {
        throw new Error('No se pudo registrar la subscripcion');
      }
      return data;
    } catch (error) {
      console.log('Error fetching subscriptions: ', error);
      throw error;
    }
  },
};
export default SubscriptionService;
