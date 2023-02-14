import { getAccount, sendTransfer } from './transfer.api';
import { history } from '../../core/router';
import { mapTransferFromVmToApi } from './transfer.mappers';
import { setAccountOptions } from './transfer.helpers';
import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './transfer.validations';

const param = history.getParams();
let transferDate = {
  year: '',
  month: '',
  day: '',
};
let transfer = {
  iban: '',
  name: '',
  amount: '',
  concept: '',
  notes: '',
  day: '',
  month: '',
  year: '',
  date: '',
  email: '',
};

getAccount().then((accounts) => setAccountOptions(accounts, param.id));

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };

  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };
  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };
  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };
  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    notes: value,
  };
  formValidation.validateField('notes', transfer.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transferDate = {
    ...transferDate,
    day: value,
  };
  transfer = {
    ...transfer,
    day: value,
    date: Object.values(transferDate).join('-'),
  };
  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transferDate = {
    ...transferDate,
    month: value,
  };
  transfer = {
    ...transfer,
    month: value,
    date: Object.values(transferDate).join('-'),
  };
  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transferDate = {
    ...transferDate,
    year: value,
  };
  transfer = {
    ...transfer,
    year: value,
    date: Object.values(transferDate).join('-'),
  };
  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    email: value,
  };
  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      const transferApi = mapTransferFromVmToApi(transfer);
      console.log(transferApi);
      sendTransfer(transferApi);
    }
  });
});
