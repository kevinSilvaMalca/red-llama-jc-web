import { createContext, useState, useEffect } from 'react';
import CategoryService from '../services/category.service';
import PromoService from '../services/promo.service';
import PropTypes from 'prop-types';
import { URL_BASE } from '../services/environment';

export const DataContext = createContext();

const DataProvider = ({ children, onServicesLoaded }) => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [promo, setPromo] = useState([]);
  const [loadingPromo, setLoadingPromo] = useState(true);

  const transformData = (data) => {
    const transformedMenu = { categories: [] };
    const categoryMap = {};

    data.forEach((item) => {
      const product = {
        id: item.id,
        name: item.attributes.title,
        description: item.attributes.desc,
        price: item.attributes.price,
        url: item.attributes.image?.data
          ? `${URL_BASE}${item.attributes.image.data.attributes.url}`
          : 'https://via.placeholder.com/300x200?text=No+Image',
      };

      const categoryData = item.attributes.category?.data;
      if (!categoryData) return;

      const categoryId = categoryData.id;
      const categoryName = categoryData.attributes.name;

      if (!categoryMap[categoryId]) {
        categoryMap[categoryId] = {
          id: categoryId,
          name: categoryName,
          description: categoryData.attributes.description || '',
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
        const response = await CategoryService.getAll();
        const transformed = transformData(response.data);
        if (isMounted) {
          setCategories(transformed.categories);
          setLoadingCategories(false);
        }
      } catch (error) {
        console.error('Error fetching categories', error);
        setLoadingCategories(false);
      }
    };

    const fetchPromo = async () => {
      try {
        const promoData = await PromoService.getData();
        const formats =
          promoData?.data?.attributes?.image?.data?.attributes?.formats;

        const flyer = formats
          ? {
              large: `${URL_BASE}${formats.large?.url}`,
              medium: `${URL_BASE}${formats.medium?.url}`,
              small: `${URL_BASE}${formats.small?.url}`,
              thumbnail: `${URL_BASE}${formats.thumbnail?.url}`,
            }
          : null;

        if (isMounted) {
          setPromo(flyer);
          setLoadingPromo(false);
        }
      } catch (error) {
        console.error('Error fetching promo', error);
        setLoadingPromo(false);
      }
    };

    fetchCategories();
    fetchPromo();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loadingCategories && !loadingPromo) {
      // ✅ SOLO LLAMAMOS SI EXISTE
      if (typeof onServicesLoaded === 'function') {
        onServicesLoaded();
      }
    }
  }, [loadingCategories, loadingPromo, onServicesLoaded]);

  return (
    <DataContext.Provider
      value={{
        categories,
        promo,
        loading: loadingCategories || loadingPromo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
  onServicesLoaded: PropTypes.func, // ✅ YA NO ES OBLIGATORIO
};

export default DataProvider;
