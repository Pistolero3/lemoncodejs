import { getProperties, getSaleTypes, getProvinces } from './property-list.api';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import {
  mapPropertiesFromApiToVm,
  mapFilterToQueryParams,
} from './property-list.mapper';
import {
  roomOptions,
  bathOptions,
  minPriceOptions,
  maxPriceOptions,
} from './property-list.constants';

import { onUpdateField, onSubmitForm } from '../../common/helpers';

//Hemos hecho el destructuring directamente en la promesa
Promise.all([getProperties(), getSaleTypes(), getProvinces()]).then(
  ([properties, saleTypes, provinces]) => {
    loadProperties(properties);

    setOptions(saleTypes, 'select-sale-type', '¿Qué venta?');

    setOptions(provinces, 'select-province', '¿Dónde buscas?');

    setOptions(roomOptions, 'select-room', 'Habitaciones');

    setOptions(bathOptions, 'select-bathroom', '¿Cuartos de baño?');

    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');

    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
  }
);

const loadProperties = (properties) => {
  const vmProperties = mapPropertiesFromApiToVm(properties);
  addPropertyRows(vmProperties);
};

let filter = {
  saleTypeId: '',
  provinceId: '',
  minRooms: '',
  minBathrooms: '',
  minPrice: '',
  maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    saleTypeId: value,
  };
});

onUpdateField('select-province', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    provinceId: value,
  };
});

onUpdateField('select-room', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minRooms: value,
  };
});

onUpdateField('select-bathroom', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minBathrooms: value,
  };
});

onUpdateField('select-min-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    minPrice: value,
  };
});

onUpdateField('select-max-price', (event) => {
  const value = event.target.value;
  filter = {
    ...filter,
    maxPrice: value,
  };
});

onSubmitForm('search-button', () => {
  clearPropertyRows();
  const queryParams = mapFilterToQueryParams(filter);
  getProperties(queryParams).then((properties) => {
    loadProperties(properties);
  });
});
