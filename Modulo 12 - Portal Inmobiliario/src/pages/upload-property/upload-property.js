import { onSubmitForm, onSetFormErrors } from '../../common/helpers';
import {
  getProvinces,
  getSaleTypes,
  getEquipments,
} from './upload-property.api';
import { setOptionList, setCheckboxList } from './upload-property.helpers';
import {
  getNewFeatures,
  getProperty,
  getPictures,
} from './upload-property.info';
import { formValidation } from './upload-property.validators';
import { mapPropertyVmtoApi } from './upload-property.mapper';
import { sendProperty } from './upload-property.api';
import { history } from '../../core/router/history';
import { routes } from '../../core/router/routes';

Promise.all([getProvinces(), getSaleTypes(), getEquipments()]).then(
  ([provinces, saleTypes, equipments]) => {
    setOptionList(provinces, 'province');
    setCheckboxList(saleTypes, 'saleTypes');
    setCheckboxList(equipments, 'equipments');
  }
);

onSubmitForm('save-button', () => {
  formValidation.validateForm(getProperty()).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      const apiProperty = mapPropertyVmtoApi(
        getProperty(),
        getNewFeatures(),
        getPictures()
      );
      console.log(apiProperty);
      sendProperty(apiProperty);
      history.push(routes.propertyList);
    }
  });
});
