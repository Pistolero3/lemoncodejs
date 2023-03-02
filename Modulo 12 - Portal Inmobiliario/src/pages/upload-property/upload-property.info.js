import { onUpdateField, onSetError, onAddFile } from '../../common/helpers';
import {
  onAddFeature,
  onRemoveFeature,
  onAddImage,
  formatDeleteFeatureButtonId,
} from './upload-property.helpers';
import { formValidation } from './upload-property.validators';

let propertyData = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  equipments: [],
};

let newFeatures = [];
let pictures = [];

const onInputFields = (propertyInfo) => {
  Object.keys(propertyInfo).map((key) => {
    return onUpdateField(key, (event) => {
      event.preventDefault();
      const isChecked = event.target.checked;
      const value = event.target.value;
      if (Array.isArray(propertyInfo[key])) {
        isChecked
          ? (propertyInfo[key] = [...propertyInfo[key], value])
          : (propertyInfo[key] = propertyInfo[key].filter(
              (item) => item !== value
            ));
      } else {
        propertyInfo[key] = value;
      }
      formValidation
        .validateField(key, propertyInfo[key])
        .then((result) => onSetError(key, result));
    });
  });
};

const updateFeatures = (deleteWord, features) => {
  const filtered = features.filter((feature) => feature !== deleteWord);
  newFeatures = filtered;
};

const deleteFeature = (deleteButton) => {
  deleteButton.addEventListener('click', (event) => {
    const valor = event.target.id;
    let deleteWord = valor.split('-')[1];
    onRemoveFeature(deleteWord);
    updateFeatures(deleteWord, newFeatures);
  });
};

const onFeaturesField = (newFeatures) => {
  let newFeature = '';
  const insert = document.getElementById('insert-feature-button');
  onUpdateField('newFeature', (event) => {
    const value = event.target.value;
    newFeature = value;
  });
  insert.addEventListener('click', () => {
    if (newFeature) {
      document.getElementById('mainFeatures-error').innerHTML = '';
      newFeatures.push(newFeature);
      onAddFeature(newFeature);
      const deleteButton = document.getElementById(
        formatDeleteFeatureButtonId(newFeature)
      );

      deleteFeature(deleteButton);
      newFeature = '';
    } else {
      document.getElementById('mainFeatures-error').innerHTML =
        'Si quiere insertar una característica, escríbala en el campo superior';
    }
  });
};

onInputFields(propertyData);
onFeaturesField(newFeatures);
onAddFile('add-image', (value) => {
  pictures.push(value);
  onAddImage(value);
});

export const getProperty = () => propertyData;
export const getNewFeatures = () => newFeatures;
export const getPictures = () => pictures;
