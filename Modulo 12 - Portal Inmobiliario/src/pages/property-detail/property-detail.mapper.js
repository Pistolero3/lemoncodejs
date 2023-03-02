const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const getBathWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};

const getEquipment = ({ equipmentIds }, equipmentList) => {
  let equipments = [];
  equipmentIds.map((id) =>
    equipmentList.find((equipmentItem) =>
      equipmentItem.id === id ? equipments.push(equipmentItem.name) : ''
    )
  );
  return equipments;
};

export const mapPropertyfromApitoVm = (property, equipments) => {
  return {
    id: property.id,
    mainImage: Array.isArray(property.images) ? property.images[0] : [],
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathWord(property.bathrooms)}`,
    notes: property.notes,
    mainFeatures: property.mainFeatures,
    price: `${property.price.toLocaleString()} €`,
    locationUrl: property.locationUrl,
    images: Array.isArray(property.images) ? property.images : [],
    equipments: getEquipment(property, equipments),
  };
};
