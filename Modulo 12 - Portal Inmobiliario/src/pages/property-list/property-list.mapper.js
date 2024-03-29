const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const mapPropertyFromApiToVm = (property) => {
  return {
    id: property.id,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    notes: `${property.notes.substring(0, 240)}...`,
    price: `${property.price.toLocaleString()} €`,
    images: Array.isArray(property.images) ? property.images[0] : [],
  };
};

export const mapPropertiesFromApiToVm = (properties) => {
  return properties.map((property) => mapPropertyFromApiToVm(property));
};

export const mapFilterToQueryParams = (filter) => {
  let queryParams = '';
  if (filter.minRooms) {
    queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
  }
  if (filter.saleTypeId) {
    queryParams = `${queryParams}saleTypeIds_like${filter.saleTypeId}&`;
  }
  if (filter.provinceId) {
    queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
  }

  if (filter.minBathrooms) {
    queryParams = `${queryParams}minBathrooms_gte=${filter.minBathrooms}&`;
  }

  if (filter.minPrice) {
    queryParams = `${queryParams}minPrice_gte=${filter.minPrice}&`;
  }

  if (filter.maxPrice) {
    queryParams = `${queryParams}maxPrice_lte=${filter.maxPrice}&`;
  }
  return queryParams.slice(0, -1);
};
