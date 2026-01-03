import { HttpResponseEnum, HttpTypeEnum } from '../utils/enums';
import AppService from './appService';

const URL = '/flayer?populate[image][files]';

const PromoService = {
  getData: async () => {
    try {
      const { status, data } = await AppService.get(
        `${URL}`,
        {},
        {},
        HttpTypeEnum.PUBLIC,
      );
      if (status != HttpResponseEnum.OK || !data) {
        throw new Error('No se pudo obtener los datos de la promoción');
      }
      return data;
    } catch (error) {
      console.log('Error fetching promo data: ', error);
      throw error;
    }
  },
};
export default PromoService;
