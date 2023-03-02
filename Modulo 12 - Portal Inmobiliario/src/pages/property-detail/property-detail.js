import {
  getPropertyDetails,
  getEquipments,
  sendContact,
} from './property-detail.api';
import { history } from '../../core/router/history';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyfromApitoVm } from './property-detail.mapper';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './property-detail.validators';
import { routes } from '../../core/router/routes';

const params = history.getParams();
const isChosenHouse = Boolean(params.id);

if (isChosenHouse) {
  Promise.all([getPropertyDetails(params.id), getEquipments()]).then(
    ([property, equipmentList]) => {
      const vmProperty = mapPropertyfromApitoVm(property, equipmentList);
      console.log(vmProperty);
      setPropertyValues(vmProperty);
    }
  );
} else {
  history.push(routes.propertyList);
}

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    email: value,
  };
  formValidation
    .validateField('email', contact.email)
    .then((result) => onSetError('email', result));
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    message: value,
  };
  formValidation
    .validateField('note', contact.message)
    .then((result) => onSetError('message', result));
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      sendContact(contact);
    }
  });
});
