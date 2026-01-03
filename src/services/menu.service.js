import { HttpResponseEnum } from '../utils/enums';
import AppService from './appService';

const URL = '/menus';

const MenuService = {
  getAll: async () => {
    try {
      const params = {
        'filters[active][$eq]': true,
        'populate[image][fields][0]': 'url',
        'populate[image][fields][1]': 'formats',
        'populate[category][fields][0]': 'name',
        'pagination[pageSize]': 100,
      };

      const response = await AppService.get(URL, params);

      if (
        response.status !== HttpResponseEnum.OK ||
        !response.data?.data
      ) {
        throw new Error('Unable to fetch menu');
      }

      return response.data.data;
    } catch (error) {
      console.error('MenuService error:', error);
      throw error;
    }
  },
};

export default MenuService;
