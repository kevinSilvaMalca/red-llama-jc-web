import { HttpResponseEnum } from '../utils/enums';
import AppService from './appService';

const URL = '/menus';

const CategoryService = {
  getAll: async () => {
    try {
      const params = {
        'populate[image][fields][0]': 'url',
        'filters[active][$eq]': true,
        'populate[category][fields]': 'name,description',
      };
      const { status, data } = await AppService.get(`${URL}`, params);
      if (status != HttpResponseEnum.OK || !data) {
        throw new Error('No se pudo obtener las categorías');
      }
      return data;
    } catch (error) {
      console.log('Error fetching categories: ', error);
      throw error;
    }
  },
};
export default CategoryService;
