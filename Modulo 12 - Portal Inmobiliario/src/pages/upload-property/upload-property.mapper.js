export const mapPropertyVmtoApi = (
  getProperty,
  getNewFeatures,
  getPictures
) => {
  return {
    title: getProperty.title,
    notes: getProperty.notes,
    email: getProperty.email,
    phone: getProperty.phone,
    price: Number(getProperty.price),
    saleTypeIds: getProperty.saleTypes,
    address: getProperty.address,
    city: getProperty.city,
    provinceId: getProperty.province,
    squareMeter: Number(getProperty.squareMeter),
    rooms: Number(getProperty.rooms),
    bathrooms: Number(getProperty.bathrooms),
    locationUrl: getProperty.locationUrl,
    mainFeatures: getNewFeatures,
    equipmentIds: getProperty.equipments,
    images: Array.isArray(getPictures) ? getPictures : [],
  };
};
