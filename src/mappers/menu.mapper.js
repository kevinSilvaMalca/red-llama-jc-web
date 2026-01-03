export const mapMenuByCategory = (items) => {
  const STRAPI_HOST = import.meta.env.VITE_API_URL;
  const categoriesMap = {};

  items.forEach((entry) => {
    const { id, attributes } = entry;

    const categoryData = attributes.category?.data;
    if (!categoryData) return;

    const categoryId = categoryData.id;
    const categoryName = categoryData.attributes.name;

    if (!categoriesMap[categoryId]) {
      categoriesMap[categoryId] = {
        id: categoryId,
        name: categoryName,
        items: [],
      };
    }

    categoriesMap[categoryId].items.push({
      id,
      title: attributes.title,
      description: attributes.desc,
      price: attributes.price,
      imageUrl: attributes.image?.data
        ? `${STRAPI_HOST}${
            attributes.image.data.attributes.formats?.medium?.url ||
            attributes.image.data.attributes.url
          }`
        : null,
    });
  });

  return Object.values(categoriesMap);
};
