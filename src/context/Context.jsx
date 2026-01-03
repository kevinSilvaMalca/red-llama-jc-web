import { createContext, useState, useEffect } from 'react';
import CategoryService from '../services/category.service';
import PropTypes from 'prop-types';
import { URL_BASE } from '../services/environment';
import PromoService from '../services/promo.service';

export const DataContext = createContext();

const DataProvider = ({ children, onServicesLoaded }) => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [promo, setPromo] = useState([]);
  const [loadingPromo, setLoadingPromo] = useState(true);

  const transformData = (data) => {
    const transformedMenu = {
      categories: [],
    };
    const categoryMap = {};
    data.forEach((item) => {
      const product = {
        id: item.id,
        name: item.attributes.title,
        description: item.attributes.desc,
        price: item.attributes.price,
        url: item.attributes.image?.data
          ? `${URL_BASE}${item.attributes.image.data.attributes.url}`
          : 'https://via.placeholder.com/150',
      };

      const categoryId = item.attributes.category.data.id;
      const categoryName = item.attributes.category.data.attributes.name;

      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = {
          id: categoryId,
          name: categoryName,
          description:
            item.attributes.category.data.attributes.description || '',
          items: [],
        };
        transformedMenu.categories.push(categoryMap[categoryId]);
      }
      categoryMap[categoryId].items.push(product);
    });

    return transformedMenu;
  };

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getAll();
        const transformCategories = transformData(data.data);
        if (isMounted) {
          setCategories(transformCategories.categories);
          setLoadingCategories(false);
        }
      } catch (error) {
        console.log('Error al obtener las categorías', error);
        setLoadingCategories(false);
      }
    };
    const fetchPromo = async () => {
      try {
        const promoData = await PromoService.getData();
        const data = promoData.data.attributes.image.data.attributes.formats;
        const flyer = {
          large: `${URL_BASE}${data?.large?.url}`,
          medium: `${URL_BASE}${data?.medium?.url}`,
          small: `${URL_BASE}${data?.small?.url}`,
          thumbnail: `${URL_BASE}${data?.thumbnail?.url}`,
        };
        if (isMounted) {
          setPromo(flyer);
          setLoadingPromo(false);
        }
      } catch (error) {
        console.log('Error al obtener los datos', error);
        setLoadingPromo(false);
      }
    };

    fetchPromo();
    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loadingCategories && !loadingPromo) {
      onServicesLoaded();
    }
  }, [loadingCategories, loadingPromo, onServicesLoaded]);

  return (
    <DataContext.Provider
      value={{ categories, promo, loading: loadingCategories || loadingPromo }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
  onServicesLoaded: PropTypes.func.isRequired,
};

export default DataProvider;
