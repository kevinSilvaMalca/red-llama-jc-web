import { useEffect, useState } from 'react';
import PromoService from '../services/promo.service';
import { URL_BASE } from '../services/environment';

const usePromoData = () => {
  const [promo, setPromo] = useState([]);
  const [loadingPromo, setLoadingPromo] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchPromo = async () => {
      try {
        setLoadingPromo(true);
        const promoData = await PromoService.getData();
        const data = promoData.data.attributes.image.data.attributes.formats;
        const flyer = {
          large: `${URL_BASE}${data?.large?.url}`,
          medium: `${URL_BASE}${data?.medium?.url}`,
          small: `${URL_BASE}${data?.small?.url}`,
          thumbnail: `${URL_BASE}${data?.thumbnail?.url}`,
        };
        if (isMounted) setPromo(flyer);
      } catch (error) {
        console.log('Error al obtener los datos', error);
      } finally {
        if (isMounted) setLoadingPromo(false);
      }
    };
    // fetchPromo();

    return () => {
      isMounted = false;
    };
  }, []);
  return { promo, loadingPromo };
};

export default usePromoData;
